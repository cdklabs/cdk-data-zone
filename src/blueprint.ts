// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import * as datazone from 'aws-cdk-lib/aws-datazone';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { IDomain } from './domain';
import { ResourceBase, IResource } from './resource';

const IS_BLUEPRINT = Symbol.for('amazon-datazone.Blueprint');

export class BlueprintEnvironmentIdentifiers {
  static readonly DEFAULT_DATA_WAREHOUSE: string = 'DefaultDataWarehouse';
  static readonly DEFAULT_DATA_LAKE: string = 'DefaultDataLake';
}

export interface BlueprintProps {

  readonly domain: IDomain;

  readonly environmentBlueprintIdentifier: string;

  readonly enabledRegions?: string[];
  readonly manageAccessRole?: iam.Role;
  readonly provisioningRole?: iam.Role;
  readonly parameters?: { [key: string]: string };
  readonly regionalParameters?: { [key: string]: { [key: string]: string } };
}

export interface IBlueprint extends IResource {

  /**
     * @attribute
     */
  readonly blueprintId: string;

  addParameters(region: string, parameters: { [key: string]: string }): void;
}

export abstract class BlueprintBase extends ResourceBase implements IBlueprint {
  /**
     * @attribute
     */
  readonly abstract blueprintId: string;

  abstract addParameters(region: string, parameters: { [key: string]: string }): void;
}

export class Blueprint extends BlueprintBase {

  private region: string;
  private account: string;

  readonly domainId: string;
  readonly enabledRegions: string[];
  readonly environmentBlueprintIdentifier: string;
  readonly manageAccessRole: iam.Role;
  readonly provisioningRole: iam.Role;
  private _regionalParameters: { [key: string]: { [key: string]: string } };

  readonly blueprintId: string;
  readonly createdAt: string;
  readonly updatedAt: string;

  constructor(scope: Construct, id: string, props: BlueprintProps) {
    super(scope, id);

    this.domainId = props.domain.domainId;

    this.region = cdk.Stack.of(this).region;
    this.account = cdk.Stack.of(this).account;

    this.enabledRegions = props.enabledRegions || [this.region];
    this.environmentBlueprintIdentifier = props.environmentBlueprintIdentifier;

    this.manageAccessRole = props.manageAccessRole || this.createManagementAccessRole();
    this.provisioningRole = props.provisioningRole || this.createProvisioningRole();

    this._regionalParameters = { ...(props.regionalParameters || {}) };
    this._regionalParameters[this.region] = {
      ...(this._regionalParameters[this.region] ?
        this._regionalParameters[this.region] : {}),
      ...(props.parameters || {}),
    };

    const resource = new datazone.CfnEnvironmentBlueprintConfiguration(this, 'DataLakeBlueprint', {
      domainIdentifier: this.domainId,
      enabledRegions: this.enabledRegions,
      environmentBlueprintIdentifier: this.environmentBlueprintIdentifier,
      manageAccessRoleArn: this.manageAccessRole.roleArn,
      provisioningRoleArn: this.provisioningRole.roleArn,
      regionalParameters: cdk.Lazy.any({
        produce: () => Object.keys(this._regionalParameters).map(region => ({
          region: region,
          parameters: cdk.Lazy.any({
            produce: () => this._regionalParameters[region],
          }),
        })),
      }),
    });

    this.blueprintId = resource.attrEnvironmentBlueprintId;
    this.createdAt = resource.attrCreatedAt;
    this.updatedAt = resource.attrUpdatedAt;

    Object.defineProperty(this, IS_BLUEPRINT, { value: true });
  }

  public addParameters(region: string, parameters: { [key: string]: string }) {
    this._regionalParameters[region] = { ...(this._regionalParameters[region] || {}), ...parameters };
  }

  private createManagementAccessRole() {
    return new iam.Role(this, 'DataZoneManagementAccessRole', {
      assumedBy: new iam.CompositePrincipal(
        new iam.ServicePrincipal('datazone.amazonaws.com'),
        new iam.ServicePrincipal('cloudformation.amazonaws.com'),
      ),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AmazonDataZoneGlueManageAccessRolePolicy'),
      ],
    });
  }

  private createProvisioningRole() {
    return new iam.Role(this, 'DataZoneProvisioningRole', {
      assumedBy: new iam.CompositePrincipal(
        new iam.ServicePrincipal('datazone.amazonaws.com').withConditions({
          StringEquals: {
            'aws:SourceAccount': this.account,
          },
        }),
        new iam.ServicePrincipal('cloudformation.amazonaws.com').withConditions({
          StringEquals: {
            'aws:SourceAccount': this.account,
          },
        }),
      ),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonDataZoneRedshiftGlueProvisioningPolicy'),
        iam.ManagedPolicy.fromAwsManagedPolicyName('AWSGlueConsoleFullAccess'),
      ],
    });
  }

}