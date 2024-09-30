// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import * as datazone from 'aws-cdk-lib/aws-datazone';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as secrets from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';
import { IEnvironment } from './environment';
import { IProject } from './project';
import { ResourceBase, IResource, Schedule, IDataSourceConfiguration } from './resource';

const IS_DATA_SOURCE = Symbol.for('amazon-datazone.DataSource');

export interface FilterExpression {
  readonly expression: string;
  readonly type?: 'INCLUDE' | 'EXCLUDE';
}

export interface FilterConfiguration {
  readonly databaseName: string;
  readonly filterExpressions?: FilterExpression[];
  readonly schemaName?: string;
}

export interface SourceOptions {
  readonly dataAccessRole?: iam.Role;
  readonly filterConfigurations: FilterConfiguration[];
}

export interface GlueOptions extends SourceOptions {
  readonly autoImportDataQualityResult?: boolean;

}

export interface RedshiftOptions extends SourceOptions {
  readonly name: string;
  readonly type: 'CLUSTER' | 'WORKGROUP';
  readonly credentials: secrets.Secret;
}

export abstract class DataSourceConfigurationBase implements IDataSourceConfiguration {

  static fromGlue(options: GlueOptions): IDataSourceConfiguration {

    const configuration: datazone.CfnDataSource.DataSourceConfigurationInputProperty = {
      glueRunConfiguration: {
        autoImportDataQualityResult: options.autoImportDataQualityResult ?? true,
        dataAccessRole: options.dataAccessRole?.roleArn,
        relationalFilterConfigurations: options.filterConfigurations.map((filter) => {
          return {
            databaseName: filter.databaseName,
            filterExpressions: filter.filterExpressions?.map(expression => ({
              expression: expression.expression,
              type: expression.type ?? 'INCLUDE',
            })),
            schemaName: filter.schemaName,
          };
        }),
      },
    };

    return new DataSourceConfiguration('GLUE', configuration);
  }

  static fromRedshift(options: RedshiftOptions): IDataSourceConfiguration {

    const configuration: datazone.CfnDataSource.DataSourceConfigurationInputProperty = {
      redshiftRunConfiguration: {
        redshiftStorage: 'CLUSTER' === options.type ? {
          redshiftClusterSource: {
            clusterName: options.name,
          },
        } : {
          redshiftServerlessSource: {
            workgroupName: options.name,
          },
        },
        redshiftCredentialConfiguration: {
          secretManagerArn: options.credentials.secretArn,
        },
        dataAccessRole: options.dataAccessRole?.roleArn,
        relationalFilterConfigurations: options.filterConfigurations.map((filter) => {
          return {
            databaseName: filter.databaseName,
            filterExpressions: filter.filterExpressions?.map(expression => ({
              expression: expression.expression,
              type: expression.type ?? 'INCLUDE',
            })),
            schemaName: filter.schemaName,
          };
        }),
      },
    };

    return new DataSourceConfiguration('REDSHIFT', configuration);
  }

  readonly abstract type: string;

  readonly abstract configuration: datazone.CfnDataSource.DataSourceConfigurationInputProperty;

}

class DataSourceConfiguration implements IDataSourceConfiguration {

  constructor(readonly type: string, readonly configuration: datazone.CfnDataSource.DataSourceConfigurationInputProperty) {
  }
}

export interface DataSourceProps {

  readonly project: IProject;

  readonly environment: IEnvironment;

  readonly name: string;

  readonly enabled?: boolean;

  readonly publishOnImport?: boolean;

  readonly recommendation?: boolean;

  readonly schedule?: Schedule;

  readonly configuration: IDataSourceConfiguration;

  readonly description?: string;
}

export interface IDataSource extends IResource {

  /**
   * The ID of the environment in which the data source exists.
   *
   * @cloudformationAttribute EnvironmentId
   * @attribute
   */
  readonly environment: IEnvironment;
  /**
   * The identifier of the data source run.
   *
   * @cloudformationAttribute Id
   * @attribute
   */
  readonly dataSourceId: string;
  /**
   * The count of the assets created during the last data source run.
   *
   * @cloudformationAttribute LastRunAssetCount
   * @attribute
   */
  readonly lastRunAssetCount: cdk.IResolvable;
  /**
   * The timestamp of when the data source run was last performed.
   *
   * @cloudformationAttribute LastRunAt
   * @attribute
   */
  readonly lastRunAt: string;
  /**
   * The status of the last data source run.
   *
   * @cloudformationAttribute LastRunStatus
   * @attribute
   */
  readonly lastRunStatus: string;
  /**
   * The project ID included in the data source run activity.
   *
   * @cloudformationAttribute ProjectId
   * @attribute
   */
  readonly project: IProject;
  /**
   * The status of the data source.
   *
   * @cloudformationAttribute Status
   * @attribute
   */
  readonly status: string;

}

export abstract class DataSourceBase extends ResourceBase implements IDataSource {

  /**
   * The identifier of the data source run.
   *
   * @cloudformationAttribute Id
   * @attribute
   */
  readonly abstract dataSourceId: string;

  /**
   * The ID of the environment in which the data source exists.
   *
   * @cloudformationAttribute EnvironmentId
   * @attribute
   */
  readonly abstract environment: IEnvironment;
  /**
   * The count of the assets created during the last data source run.
   *
   * @cloudformationAttribute LastRunAssetCount
   * @attribute
   */
  readonly abstract lastRunAssetCount: cdk.IResolvable;
  /**
   * The timestamp of when the data source run was last performed.
   *
   * @cloudformationAttribute LastRunAt
   * @attribute
   */
  readonly abstract lastRunAt: string;
  /**
   * The status of the last data source run.
   *
   * @cloudformationAttribute LastRunStatus
   * @attribute
   */
  readonly abstract lastRunStatus: string;
  /**
   * The project ID included in the data source run activity.
   *
   * @cloudformationAttribute ProjectId
   * @attribute
   */
  readonly abstract project: IProject;
  /**
   * The status of the data source.
   *
   * @cloudformationAttribute Status
   * @attribute
   */
  readonly abstract status: string;

}

export class DataSource extends DataSourceBase {

  /**
   * The timestamp of when the data source was created.
   *
   * @cloudformationAttribute CreatedAt
   * @attribute
   */
  readonly createdAt: string;

  /**
   * The ID of the environment in which the data source exists.
   *
   * @cloudformationAttribute EnvironmentId
   * @attribute
   */
  readonly environment: IEnvironment;
  /**
   * The identifier of the data source run.
   *
   * @cloudformationAttribute Id
   * @attribute
   */
  readonly dataSourceId: string;
  /**
   * The count of the assets created during the last data source run.
   *
   * @cloudformationAttribute LastRunAssetCount
   * @attribute
   */
  readonly lastRunAssetCount: cdk.IResolvable;
  /**
   * The timestamp of when the data source run was last performed.
   *
   * @cloudformationAttribute LastRunAt
   * @attribute
   */
  readonly lastRunAt: string;
  /**
   * The status of the last data source run.
   *
   * @cloudformationAttribute LastRunStatus
   * @attribute
   */
  readonly lastRunStatus: string;
  /**
   * The project ID included in the data source run activity.
   *
   * @cloudformationAttribute ProjectId
   * @attribute
   */
  readonly project: IProject;
  /**
   * The status of the data source.
   *
   * @cloudformationAttribute Status
   * @attribute
   */
  readonly status: string;
  /**
   * The timestamp of when the data source was updated.
   *
   * @cloudformationAttribute UpdatedAt
   * @attribute
   */
  readonly updatedAt: string;

  readonly name: string;

  readonly enabled: boolean;

  readonly publishOnImport: boolean;

  readonly recommendation: boolean;

  readonly schedule?: Schedule;

  readonly type: string;

  readonly description?: string;

  constructor(scope: Construct, id: string, props: DataSourceProps) {
    super(scope, id);

    // check if domain name is 64 characters or less
    if (!cdk.Token.isUnresolved(props.name) && props.name.length > 64) {
      throw new Error('Project name must be 64 characters or less');
    }

    this.description = props.description;
    this.name = props.name;
    this.type = props.configuration.type;
    this.enabled = props.enabled ?? true;
    this.publishOnImport = props.publishOnImport ?? true;
    this.recommendation = props.recommendation ?? true;
    this.environment = props.environment;

    const resource = new datazone.CfnDataSource(this, 'Resource', {
      domainIdentifier: props.project.projectDomainId,
      projectIdentifier: props.project.projectId,
      environmentIdentifier: props.environment.environmentId,
      name: props.name,
      description: props.description,
      enableSetting: this.enabled ? 'ENABLED' : 'DISABLED',
      publishOnImport: this.publishOnImport,
      recommendation: this.recommendation ? { enableBusinessNameGeneration: true } : undefined,
      schedule: props.schedule ? { schedule: props.schedule.expression, timezone: props.schedule.timezone } : undefined,
      type: props.configuration.type,
      configuration: props.configuration.configuration,
    });


    this.dataSourceId = resource.attrId;
    this.createdAt = resource.attrCreatedAt;
    this.updatedAt = resource.attrUpdatedAt;
    this.lastRunAssetCount = resource.attrLastRunAssetCount;
    this.lastRunAt = resource.attrLastRunAt;
    this.lastRunStatus = resource.attrLastRunStatus;
    this.status = resource.attrStatus;

    this.project = props.project;


    Object.defineProperty(this, IS_DATA_SOURCE, { value: true });
  }

}