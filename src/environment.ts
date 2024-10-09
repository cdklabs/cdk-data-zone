// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import * as datazone from 'aws-cdk-lib/aws-datazone';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { DataSource } from './data-source';
import { IEnvironmentProfile } from './environment-profile';
import { IProject } from './project';
import { IDataSourceConfiguration, IResource, ResourceBase, Schedule } from './resource';

const IS_ENVIRONMENT = Symbol.for('amazon-datazone.Environment');

export interface EnvironmentProps {
  /**
     * The description of the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-description
     */
  readonly description?: string;
  /**
     * The identifier of the environment profile that is used to create this Amazon  environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-environmentprofileidentifier
     */
  readonly environmentProfile: IEnvironmentProfile;
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
  readonly name: string;
  /**
     * The identifier of the Amazon  project in which this environment is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-projectidentifier
     */
  readonly project: IProject;
  /**
     * The user parameters of this Amazon  environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-userparameters
     */
  readonly userParameters?: Array<datazone.CfnEnvironment.EnvironmentParameterProperty | cdk.IResolvable> | cdk.IResolvable;
}

export interface DataSourceOptions {
  readonly enabled?: boolean;

  readonly publishOnImport?: boolean;

  readonly recommendation?: boolean;

  readonly schedule?: Schedule;

  readonly configuration: IDataSourceConfiguration;

  readonly description?: string;
}

export interface IEnvironment extends IResource {
  /**
 * The identifier of the AWS account in which an environment exists.
 *
 * @cloudformationAttribute AwsAccountId
 * @attribute
 */
  readonly awsAccountId: string;
  /**
     * The AWS Region in which an environment exists.
     *
     * @cloudformationAttribute AwsAccountRegion
     */
  readonly awsAccountRegion: string;

  /**
     * The Amazon  user who created the environment.
     *
     * @cloudformationAttribute CreatedBy
     * @attribute
     */
  readonly createdBy: string;
  /**
     * The identifier of the Amazon  domain in which the environment exists.
     *
     * @cloudformationAttribute DomainId
     * @attribute
     */
  readonly domainId: string;
  /**
     * The identifier of a blueprint with which an environment profile is created.
     *
     * @cloudformationAttribute EnvironmentBlueprintId
     * @attribute
     */
  readonly environmentBlueprintId: string;
  /**
     * The identifier of the environment profile with which the environment was created.
     *
     * @cloudformationAttribute EnvironmentProfileId
     */
  readonly environmentProfile: IEnvironmentProfile;
  /**
     * The identifier of the environment.
     *
     * @cloudformationAttribute Id
     * @attribute
     */
  readonly environmentId: string;
  /**
     * The identifier of the project in which the environment exists.
     *
     * @cloudformationAttribute ProjectId
     */
  readonly project: IProject;
  /**
     * The provider of the environment.
     *
     * @cloudformationAttribute Provider
     */
  readonly provider: string;
  /**
     * The status of the environment.
     *
     * @cloudformationAttribute Status
     * @attribute
     */
  readonly status: string;

  addDataSource(name: string, options: DataSourceOptions): DataSource;
}

export abstract class EnvironmentBase extends ResourceBase implements IEnvironment {

  /**
     * The identifier of the AWS account in which an environment exists.
     *
     * @cloudformationAttribute AwsAccountId
     * @attribute
     */
  readonly abstract awsAccountId: string;
  /**
     * The AWS Region in which an environment exists.
     *
     * @cloudformationAttribute AwsAccountRegion
     */
  readonly abstract awsAccountRegion: string;
  /**
     * The Amazon  user who created the environment.
     *
     * @cloudformationAttribute CreatedBy
     * @attribute
     */
  readonly abstract createdBy: string;
  /**
     * The identifier of the Amazon  domain in which the environment exists.
     *
     * @cloudformationAttribute DomainId
     * @attribute
     */
  readonly abstract domainId: string;
  /**
     * The identifier of a blueprint with which an environment profile is created.
     *
     * @cloudformationAttribute EnvironmentBlueprintId
     * @attribute
     */
  readonly abstract environmentBlueprintId: string;
  /**
     * The identifier of the environment profile with which the environment was created.
     *
     * @cloudformationAttribute EnvironmentProfileId
     */
  readonly abstract environmentProfile: IEnvironmentProfile;
  /**
     * The identifier of the environment.
     *
     * @cloudformationAttribute Id
     * @attribute
     */
  readonly abstract environmentId: string;
  /**
     * The identifier of the project in which the environment exists.
     *
     * @cloudformationAttribute ProjectId
     */
  readonly abstract project: IProject;
  /**
     * The provider of the environment.
     *
     * @cloudformationAttribute Provider
     */
  readonly abstract provider: string;
  /**
     * The status of the environment.
     *
     * @cloudformationAttribute Status
     * @attribute
     */
  readonly abstract status: string;

  readonly abstract name: string;

  addDataSource(name: string, options: DataSourceOptions): DataSource {
    return new DataSource(this, name, {
      ...options,
      project: this.project,
      environment: this,
      name: name,
    });
  }
}

export class Environment extends EnvironmentBase {

  /**
     * The identifier of the AWS account in which an environment exists.
     *
     * @cloudformationAttribute AwsAccountId
     * @attribute
     */
  readonly awsAccountId: string;
  /**
     * The AWS Region in which an environment exists.
     *
     * @cloudformationAttribute AwsAccountRegion
     */
  readonly awsAccountRegion: string;
  /**
     * The timestamp of when the environment was created.
     *
     * @cloudformationAttribute CreatedAt
     * @attribute
     */
  readonly createdAt: string;
  /**
     * The Amazon  user who created the environment.
     *
     * @cloudformationAttribute CreatedBy
     * @attribute
     */
  readonly createdBy: string;
  /**
     * The identifier of the Amazon  domain in which the environment exists.
     *
     * @cloudformationAttribute DomainId
     * @attribute
     */
  readonly domainId: string;
  /**
     * The identifier of a blueprint with which an environment profile is created.
     *
     * @cloudformationAttribute EnvironmentBlueprintId
     * @attribute
     */
  readonly environmentBlueprintId: string;
  /**
     * The identifier of the environment profile with which the environment was created.
     *
     * @cloudformationAttribute EnvironmentProfileId
     */
  readonly environmentProfile: IEnvironmentProfile;
  /**
     * The identifier of the environment.
     *
     * @cloudformationAttribute Id
     * @attribute
     */
  readonly environmentId: string;
  /**
     * The identifier of the project in which the environment exists.
     *
     * @cloudformationAttribute ProjectId
     */
  readonly project: IProject;
  /**
     * The provider of the environment.
     *
     * @cloudformationAttribute Provider
     */
  readonly provider: string;
  /**
     * The status of the environment.
     *
     * @cloudformationAttribute Status
     * @attribute
     */
  readonly status: string;
  /**
     * The timestamp of when the environment was updated.
     *
     * @cloudformationAttribute UpdatedAt
     * @attribute
     */
  readonly updatedAt: string;

  readonly name: string;


  constructor(scope: Construct, id: string, props: EnvironmentProps) {
    super(scope, id);

    // check if domain name is 64 characters or less
    if (!cdk.Token.isUnresolved(props.name) && props.name.length > 64) {
      throw new Error('Project name must be 64 characters or less');
    }

    const resource = new datazone.CfnEnvironment(this, 'Resource', {
      domainIdentifier: props.project.projectDomainId,
      projectIdentifier: props.project.projectId,
      name: props.name,
      description: props.description,
      environmentProfileIdentifier: props.environmentProfile.environmentProfileId,
      environmentAccountIdentifier: props.environmentProfile.awsAccountId,
      environmentAccountRegion: props.environmentProfile.awsAccountRegion,
      environmentRoleArn: props.environmentRole?.roleArn,
      glossaryTerms: props.glossaryTerms,
      userParameters: props.userParameters,
    });


    this.createdAt = resource.attrCreatedAt;
    this.createdBy = resource.attrCreatedBy;
    this.project = props.project;
    this.environmentBlueprintId = resource.attrEnvironmentBlueprintId;
    this.updatedAt = resource.attrUpdatedAt;
    this.environmentId = resource.attrId;
    this.status = resource.attrStatus;
    this.name = props.name;
    this.provider = resource.attrProvider;
    this.environmentProfile = props.environmentProfile;
    this.domainId = resource.attrDomainId;
    this.awsAccountId = resource.attrAwsAccountId;
    this.awsAccountRegion = resource.attrAwsAccountRegion;

    Object.defineProperty(this, IS_ENVIRONMENT, { value: true });
  }
}