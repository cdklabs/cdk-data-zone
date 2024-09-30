// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import * as datazone from 'aws-cdk-lib/aws-datazone';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { IBlueprint } from './blueprint';
import { Environment } from './environment';
import { IProject } from './project';
import { IResource, ResourceBase } from './resource';

const IS_ENVIRONMENT_PROFILE = Symbol.for('amazon-datazone.EnvironmentProfile');

export interface EnvironmentOptions {
  /**
     * The description of the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-description
     */
  readonly description?: string;
  /**
     * The ARN of the environment role.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-environmentrolearn
     */
  readonly environmentRole?: iam.Role;
  /**
     * The glossary terms that can be used in this Amazon  environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-glossaryterms
     */
  readonly glossaryTerms?: Array<string>;
  /**
     * The name of the Amazon  environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-name
     */
  readonly name?: string;
  /**
     * The user parameters of this Amazon  environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-userparameters
     */
  readonly userParameters?: Array<datazone.CfnEnvironment.EnvironmentParameterProperty | cdk.IResolvable> | cdk.IResolvable;
}

export interface EnvironmentProfileProps {
  /**
     * The identifier of an AWS account in which an environment profile exists.
     *
     * @default the  Domain account
     *
     */
  readonly awsAccountId?: string;
  /**
     * The AWS Region in which an environment profile exists.
     *
     * @default the  Domain region
     */
  readonly awsAccountRegion?: string;
  /**
     * The description of the environment profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-description
     * @attribute
     */
  readonly description?: string;
  /**
     * The identifier of a blueprint with which an environment profile is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-environmentblueprintidentifier
     */
  readonly blueprint: IBlueprint;
  /**
     * The name of the environment profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-name
     */
  readonly name: string;
  /**
     * The identifier of a project in which an environment profile exists.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-projectidentifier
     */
  readonly project: IProject;
  /**
     * The user parameters of this Amazon  environment profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-userparameters
     */
  readonly userParameters?: Array<datazone.CfnEnvironmentProfile.EnvironmentParameterProperty | cdk.IResolvable> | cdk.IResolvable;
}

export interface IEnvironmentProfile extends IResource {

  readonly awsAccountId: string;

  readonly awsAccountRegion: string;

  readonly name: string;

  readonly description?: string;

  /**
     * The Amazon  user who created the environment profile.
     *
     * @attribute
     */
  readonly createdBy: string;
  /**
     * The identifier of a blueprint with which an environment profile is created.
     *
     * @attribute
     */
  readonly environmentBlueprintId: string;
  /**
     * The identifier of the environment profile.
     *
     * @attribute Id
     */
  readonly environmentProfileId: string;
  /**
     * The identifier of a project in which an environment profile exists.
     *
     * @cloudformationAttribute ProjectId
     */
  readonly project: IProject;

  addEnvironment(id: string, options: EnvironmentOptions): Environment;
}


export abstract class EnvironmentProfileBase extends ResourceBase implements IEnvironmentProfile {
  readonly abstract awsAccountId: string;

  readonly abstract awsAccountRegion: string;

  readonly abstract name: string;

  readonly abstract description?: string;

  /**
     * The Amazon  user who created the environment profile.
     *
     * @attribute
     */
  readonly abstract createdBy: string;
  /**
     * The identifier of a blueprint with which an environment profile is created.
     *
     * @attribute
     */
  readonly abstract environmentBlueprintId: string;
  /**
     * The identifier of the environment profile.
     *
     * @attribute Id
     */
  readonly abstract environmentProfileId: string;
  /**
     * The identifier of a project in which an environment profile exists.
     *
     * @cloudformationAttribute ProjectId
     */
  readonly abstract project: IProject;

  addEnvironment(id: string, options: EnvironmentOptions): Environment {
    return new Environment(this.project, id, {
      ...options,
      name: options.name ?? id,
      environmentProfile: this,
      project: this.project,
    });
  }

}

export class EnvironmentProfile extends EnvironmentProfileBase {

  readonly awsAccountId: string;

  readonly awsAccountRegion: string;

  readonly name: string;

  readonly description?: string;

  /**
     * The timestamp of when an environment profile was created.
     *
     * @attribute
     */
  readonly createdAt: string;
  /**
     * The Amazon  user who created the environment profile.
     *
     * @attribute
     */
  readonly createdBy: string;
  /**
     * The identifier of a blueprint with which an environment profile is created.
     *
     * @attribute
     */
  readonly environmentBlueprintId: string;
  /**
     * The identifier of the environment profile.
     *
     * @attribute Id
     */
  readonly environmentProfileId: string;
  /**
     * The identifier of a project in which an environment profile exists.
     *
     * @cloudformationAttribute ProjectId
     */
  readonly project: IProject;
  /**
     * The timestamp of when the environment profile was updated.
     *
     * @attribute
     */
  readonly updatedAt: string;

  constructor(scope: Construct, id: string, props: EnvironmentProfileProps) {
    super(scope, id);

    // check if domain name is 64 characters or less
    if (!cdk.Token.isUnresolved(props.name) && props.name.length > 64) {
      throw new Error('Project name must be 64 characters or less');
    }

    this.awsAccountId = props.awsAccountId ?? cdk.Stack.of(this).account;
    this.awsAccountRegion = props.awsAccountRegion ?? cdk.Stack.of(this).region;

    this.description = props.description;

    const resource = new datazone.CfnEnvironmentProfile(this, 'Resource', {
      domainIdentifier: props.project.projectDomainId,
      projectIdentifier: props.project.projectId,
      name: props.name,
      description: props.description,
      environmentBlueprintIdentifier: props.blueprint.blueprintId,
      awsAccountId: this.awsAccountId,
      awsAccountRegion: this.awsAccountRegion,
      userParameters: props.userParameters,
    });

    this.name = props.name;
    this.createdAt = resource.attrCreatedAt;
    this.createdBy = resource.attrCreatedBy;
    this.project = props.project;
    this.environmentBlueprintId = resource.attrEnvironmentBlueprintId;
    this.updatedAt = resource.attrUpdatedAt;
    this.environmentProfileId = resource.attrId;

    Object.defineProperty(this, IS_ENVIRONMENT_PROFILE, { value: true });
  }
}