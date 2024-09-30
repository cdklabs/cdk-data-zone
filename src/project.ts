// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as fs from 'fs';
import * as cdk from 'aws-cdk-lib';
import * as datazone from 'aws-cdk-lib/aws-datazone';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct, Dependable } from 'constructs';
import { IDomain } from './domain';
import { FormMetadata } from './form-metadata';
import { Glossary, GlossaryTermOptions } from './glossary';
import { IResource, ResourceBase } from './resource';


const IS_PROJECT = Symbol.for('amazon-datazone.Project');

export interface ProjectProps {
  /**
   * The identifier of a Amazon  domain where the project exists.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-domainidentifier
   */
  readonly domain: IDomain;
  /**
   * The description of a project.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-description
   */
  readonly description?: string;
  /**
   * The glossary terms that can be used in this Amazon  project.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-glossaryterms
   */
  readonly glossaryTerms?: Array<string>;
  /**
   * The name of a project.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-name
   */
  readonly name: string;

  readonly managementRole?: iam.Role;

  readonly forms?: Forms;

  readonly glossaries?: Glossaries;
}

export interface FormMetadataOptions {
  readonly name: string;

  readonly description?: string;

  readonly smithyModel?: string;
}

export interface GlossaryOptions {

  readonly name: string;

  readonly description: string;

  readonly terms?: GlossaryTermOptions[];
}

export interface MemberOptions {

  readonly designation?: 'PROJECT_OWNER' | 'PROJECT_CONTRIBUTOR';

  readonly userIdentifier?: string;

  readonly groupIdentifier?: string;
}


export class Forms {

  static fromInline(...options: FormMetadataOptions[]) {
    return new Forms(options);
  }

  static fromFile(path: string) {

    const options = JSON.parse(fs.readFileSync(path, 'utf8'));

    return new Forms(options);
  }

  private constructor(readonly metadataOptions: FormMetadataOptions[] = []) {
  }
}

export class Glossaries {

  static fromInline(...options: GlossaryOptions[]) {
    return new Glossaries(options);
  }

  static fromFile(path: string) {

    const options = JSON.parse(fs.readFileSync(path, 'utf8'));

    return new Glossaries(options);
  }

  private constructor(readonly glossariesList: GlossaryOptions[] = []) { }
}

export interface IProject extends IResource {
  /**
   * The identifier of a Amazon  domain where the project exists.
   *
   * @attribute
   */
  readonly projectDomainId: string;
  /**
   * The identifier of a project.
   *
   * @attribute
   */
  readonly projectId: string;
  /**
   * The Amazon  user who created the project.
   *
   * @attribute
   */
  readonly createdBy: string;

  addGlossaries(glossaries: Glossaries): void;

  addGlossaryTerm(term: string): void;

  addGlossary(options: GlossaryOptions): Glossary;

  addMember(id: string, options: MemberOptions): void;

  addFormMetadata(forms: Forms): void;
}

export abstract class ProjectBase extends ResourceBase implements IProject {
  readonly abstract projectDomainId: string;
  /**
   * The identifier of a project.
   *
   * @attribute
   */
  readonly abstract projectId: string;
  /**
   * The Amazon  user who created the project.
   *
   * @attribute
   */
  readonly abstract createdBy: string;

  abstract addGlossaries(glossaries: Glossaries): void;

  abstract addGlossaryTerm(term: string): void;

  abstract addGlossary(options: GlossaryOptions): Glossary;

  abstract addMember(id: string, options: MemberOptions): void;

  abstract addFormMetadata(forms: Forms): void;
}

export class Project extends ProjectBase {

  readonly projectDomainId: string;
  /**
   * The identifier of a project.
   *
   * @attribute
   */
  readonly projectId: string;
  /**
   * The Amazon  user who created the project.
   *
   * @attribute
   */
  readonly createdBy: string;
  /**
   * @attribute
   */
  readonly createdAt: string;
  /**
   * The timestamp of when the project was last updated.
   *
   * @attribute
   */
  readonly updatedAt: string;

  readonly managementRole: iam.Role;

  readonly membership: datazone.CfnProjectMembership;

  private readonly glossaryTerms: string[] = [];


  constructor(scope: Construct, id: string, props: ProjectProps) {
    super(scope, id);

    // check if domain name is 64 characters or less
    if (!cdk.Token.isUnresolved(props.name) && props.name.length > 64) {
      throw new Error('Project name must be 64 characters or less');
    }

    if (props.glossaryTerms) {
      props.glossaryTerms.forEach((term) => this.addGlossaryTerm(term));
    }

    const project = new datazone.CfnProject(this, 'Resource', {
      domainIdentifier: props.domain.domainId,
      name: props.name,
      glossaryTerms: cdk.Lazy.list({ produce: () => this.glossaryTerms }, { omitEmpty: true }),
      description: props.description,
    });

    this.projectId = project.attrId;
    this.projectDomainId = project.attrDomainId;
    this.createdBy = project.attrCreatedBy;
    this.createdAt = project.attrCreatedAt;
    this.updatedAt = project.attrLastUpdatedAt;

    this.managementRole = props.managementRole ?? this.createManagementRole();

    this.membership = this._addMember('automation', {
      userIdentifier: this.managementRole.roleArn,
      designation: 'PROJECT_OWNER',
    });

    Dependable.of(this.membership);

    this.membership.node.addDependency(this.managementRole);

    if (props.forms) {
      this.addFormMetadata(props.forms);
    }

    if (props.glossaries) {
      this.addGlossaries(props.glossaries);
    }

    Object.defineProperty(this, IS_PROJECT, { value: true });
  }

  public addGlossaries(glossaries: Glossaries): void {
    glossaries.glossariesList.forEach((options) => this.addGlossary(options));
  }

  public addGlossaryTerm(term: string): void {
    if (this.glossaryTerms.length >= 20) {
      throw new Error('A project can have a maximum of 20 glossary terms');
    }
    this.glossaryTerms.push(term);
  }

  addGlossary(options: GlossaryOptions): Glossary {
    return new Glossary(this, `Glossary-${options.name}`, {
      project: this,
      ...options,
    });
  }

  addMember(id: string, options: MemberOptions): void {
    if (options.userIdentifier && options.groupIdentifier) {
      throw new Error('Only one of userIdentifier or groupIdentifier should be provided');
    }

    this._addMember(id, options);
  }

  public addFormMetadata(forms: Forms) {
    forms.metadataOptions.forEach((options) => this._addFormMetadata(options));
  }

  private _addFormMetadata(options: FormMetadataOptions): FormMetadata {
    return new FormMetadata(this, `FormMetadata-${options.name}`, {
      project: this,
      ...options,
    });
  }

  private _addMember(id: string, options: MemberOptions) {
    return new datazone.CfnProjectMembership(this, `ProjectMembership-${id}`, {
      domainIdentifier: this.projectDomainId,
      projectIdentifier: this.projectId,
      member: {
        userIdentifier: options.userIdentifier,
        groupIdentifier: options.groupIdentifier,
      },
      designation: options.designation ?? 'PROJECT_OWNER',
    });
  }

  private createManagementRole(): iam.Role {
    return new iam.Role(this, 'ManagementRole', {
      assumedBy: new iam.ServicePrincipal('datazone.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'),
      ],
    });
  }
}