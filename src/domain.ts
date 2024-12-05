// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import * as datazone from 'aws-cdk-lib/aws-datazone';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import { Construct } from 'constructs';
import { Blueprint } from './blueprint';
import { Forms, Glossaries, Project } from './project';
import { IResource, ResourceBase } from './resource';

const IS_DOMAIN = Symbol.for('amazon-datazone.Domain');

export enum SingleSignOnType {
  IAM_IDC = 'IAM_IDC',
  DISABLED = 'DISABLED',
}

export enum AssignmentType {
  AUTOMATIC = 'AUTOMATIC',
  MANUAL = 'MANUAL',
}

export interface SingleSignOn {
  readonly ssoType: SingleSignOnType;

  readonly userAssignment?: AssignmentType;
}


export interface DomainProps {
  /**
     * The description of the Amazon DataZone domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-description
     */
  readonly description?: string;
  /**
     * The domain execution role that is created when an Amazon DataZone domain is created.
     *
     * The domain execution role is created in the AWS account that houses the Amazon DataZone domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-domainexecutionrole
     */
  readonly domainExecutionRole?: iam.Role;
  /**
     * The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-kmskeyidentifier
     */
  readonly encryptionKey?: kms.IKey;
  /**
     * The name of the Amazon DataZone domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-name
     */
  readonly name: string;
  /**
     * The single sign-on details in Amazon DataZone.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-singlesignon
     */
  readonly singleSignOn?: SingleSignOn;
  /**
     * The tags specified for the Amazon DataZone domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-tags
     */
  readonly tags?: string[];
}

export interface BlueprintOptions {
  readonly enabledRegions?: string[];
  readonly manageAccessRole?: iam.Role;
  readonly provisioningRole?: iam.Role;
  readonly parameters?: { [key: string]: string };
  readonly regionalParameters?: { [key: string]: { [key: string]: string } };
}

export interface ProjectOptions {
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

export interface IDomain extends IResource {

  /**
     * @attribute
     */
  readonly domainId: string;

  /**
     * @attribute
     */
  readonly domainArn: string;

  /**
     * @attribute
     */
  readonly portalUrl: string;

  /**
     * @attribute
     */
  readonly managedAccount: string;

  /**
     * @attribute
     */
  readonly status: string;

  addSingleSignOn(singleSignOn: SingleSignOn): void;

  enableBlueprint(blueprintIdentifier: string, options?: BlueprintOptions): Blueprint;

  createProject(id: string, options: ProjectOptions): Project;

}

export abstract class DomainBase extends ResourceBase implements IDomain {

  /**
     * @attribute
     */
  readonly abstract domainId: string;

  /**
     * @attribute
     */
  readonly abstract domainArn: string;

  /**
     * @attribute
     */
  readonly abstract portalUrl: string;

  /**
     * @attribute
     */
  readonly abstract managedAccount: string;

  /**
     * @attribute
     */
  readonly abstract status: string;

  abstract addSingleSignOn(singleSignOn: SingleSignOn): void;

  enableBlueprint(blueprintIdentifier: string, options?: BlueprintOptions): Blueprint {
    return new Blueprint(this, blueprintIdentifier, {
      ...options,
      domain: this,
      environmentBlueprintIdentifier: blueprintIdentifier,
    });
  }

  createProject(id: string, options: ProjectOptions): Project {
    return new Project(this, id, {
      ...options,
      domain: this,
    });
  }
}

export class Domain extends DomainBase {

  readonly name: string;
  readonly description?: string;
  readonly encryptionKey: kms.IKey;
  readonly domainExecutionRole: iam.Role;

  private _singleSignOn?: SingleSignOn;

  readonly domainId: string;
  readonly createdAt: string;
  readonly updatedAt: string;

  readonly domainArn: string;
  readonly portalUrl: string;
  readonly managedAccount: string;
  readonly status: string;

  constructor(scope: Construct, id: string, props: DomainProps) {
    super(scope, id);

    this.description = props.description;
    this.name = props.name;
    this.encryptionKey = props.encryptionKey ?? this.createEncryptionKey();
    this.domainExecutionRole = props.domainExecutionRole ?? this.createDomainExecutionRole();
    this._singleSignOn = props.singleSignOn;

    this.encryptionKey.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ['kms:*'],
        principals: [new iam.AccountRootPrincipal()],
        resources: ['*'],
      }),
    );
    this.encryptionKey.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: [
          'kms:Encrypt',
          'kms:Decrypt',
          'kms:ReEncrypt*',
          'kms:GenerateDataKey*',
          'kms:DescribeKey',
          'kms:CreateGrant',
          'kms:ListGrants',
          'kms:RevokeGrant',
        ],
        principals: [new iam.AnyPrincipal()],
        resources: ['*'],
        conditions: {
          StringEquals: {
            'kms:CallerAccount': cdk.Stack.of(this).account,
          },
        },
      }),
    );

    const resource = new datazone.CfnDomain(this, 'Resource', {
      name: this.name,
      description: this.description,
      kmsKeyIdentifier: this.encryptionKey?.keyArn,
      domainExecutionRole: this.domainExecutionRole.roleArn,
      singleSignOn: this.createSingleSignOn(),
      tags: props.tags?.map((tag) => ({ key: tag, value: tag })) ?? [],
    });


    this.domainId = resource.attrId;
    this.createdAt = resource.attrCreatedAt;
    this.updatedAt = resource.attrLastUpdatedAt;

    this.domainArn = resource.attrArn;
    this.portalUrl = resource.attrPortalUrl;
    this.managedAccount = resource.attrManagedAccountId;
    this.status = resource.attrStatus;

    Object.defineProperty(this, IS_DOMAIN, { value: true });
  }

  addSingleSignOn(singleSignOn: SingleSignOn): void {
    this._singleSignOn = singleSignOn;
  }

  private createEncryptionKey() {
    return new kms.Key(this, 'DomainKey', {
      enableKeyRotation: true,
      description: 'Datazone KMS Key',
      alias: `${this.name}-datazone-key`,
    });
  }

  private createDomainExecutionRole() {
    const role = new iam.Role(this, 'DomainExecutionRole', {
      assumedBy: new iam.CompositePrincipal(
        new iam.ServicePrincipal('cloudformation.amazonaws.com'),
      ),
      inlinePolicies: {
        DomainExecutionRolePolicy: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: [
                'datazone:*',
                'ram:GetResourceShareAssociations',
                'sso:CreateManagedApplicationInstance',
                'sso:DeleteManagedApplicationInstance',
                'sso:PutApplicationAssignmentConfiguration',
                'kms:Decrypt',
                'kms:DescribeKey',
                'kms:GenerateDataKey',
              ],
              effect: iam.Effect.ALLOW,
              resources: ['*'],
            }),
          ],
        }),
      },
    });

    const dataZoneAssumeRoleStatement = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      principals: [new iam.ServicePrincipal('datazone.amazonaws.com')],
      actions: ['sts:AssumeRole', 'sts:TagSession'],
      conditions: {
        'StringEquals': {
          'aws:SourceAccount': cdk.Stack.of(this).account,
        },
        'ForAllValues:StringLike': {
          'aws:TagKeys': 'datazone*',
        },
      },
    });
    role.assumeRolePolicy?.addStatements(dataZoneAssumeRoleStatement);

    return role;
  }

  private createSingleSignOn() {
    return cdk.Lazy.any({
      produce: () => {

        if (!this._singleSignOn) return undefined;

        return {
          type: this._singleSignOn?.ssoType ?? SingleSignOnType.IAM_IDC,
          userAssignment: this._singleSignOn?.userAssignment ?? AssignmentType.AUTOMATIC,
        };
      },
    });
  }

}