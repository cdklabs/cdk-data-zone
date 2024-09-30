// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as customResource from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { Project } from './project';

const IS_FORM_METADATA = Symbol.for('amazon-datazone.FormMetadata');
const FORM_METADATA_CUSTOM_RESOURCE = 'form-custom-resource';

export interface FormMetadataProps {

  readonly project: Project;

  readonly name: string;

  readonly description?: string;

  readonly smithyModel?: string;
}

export interface IFormMetadata extends cdk.IResource {

  /**
     * @attribute
     */
  readonly formName: string;

  /**
     * @attribute
     */
  readonly formRevision: string;

}

export abstract class FormMetadataBase extends cdk.Resource implements IFormMetadata {

  /**
     * @attribute
     */
  readonly abstract formName: string;

  /**
     * @attribute
     */
  readonly abstract formRevision: string;
}

export class FormMetadata extends FormMetadataBase {

  private customResourceProvider: customResource.Provider;

  /**
     * @attribute
     */
  readonly formName: string;

  /**
     * @attribute
     */
  readonly formRevision: string;

  readonly project: Project;

  constructor(scope: Construct, id: string, props: FormMetadataProps) {
    super(scope, id);

    this.project = props.project;

    const stack = cdk.Stack.of(scope);

    this.customResourceProvider = stack.node.tryFindChild(FORM_METADATA_CUSTOM_RESOURCE) as customResource.Provider
        ?? this.createFormMetadataProvider(stack);

    const resource = new cdk.CustomResource(this, 'form-metadata', {
      serviceToken: this.customResourceProvider.serviceToken,
      properties: {
        DomainIdentifier: props.project.projectDomainId,
        ProjectIdentifier: props.project.projectId,
        FormName: props.name,
        FormDescription: props.description,
        FormModelSmithy: props.smithyModel,
      },
    });

    this.formName = resource.getAttString('Name');

    this.formRevision = resource.getAttString('Revision');

    Object.defineProperty(this, IS_FORM_METADATA, { value: true });
  }


  private createFormMetadataProvider(stack: cdk.Stack) {

    const functionName = cdk.Names.uniqueId(stack) + '-form';

    const lambdaFunction = new lambda.Function(stack, FORM_METADATA_CUSTOM_RESOURCE + 'Lambda', {
      functionName,
      runtime: lambda.Runtime.PYTHON_3_12,
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../assets/form')),
      handler: 'main.handler',
      memorySize: 1024,
      timeout: cdk.Duration.minutes(5),
      tracing: lambda.Tracing.ACTIVE,
      currentVersionOptions: {
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      },
      role: this.project.managementRole,
    });

    lambdaFunction.node.addDependency(this.project.membership);

    this.project.managementRole.assumeRolePolicy?.addStatements(new iam.PolicyStatement({
      principals: [new iam.ServicePrincipal('lambda.amazonaws.com')],
      actions: ['sts:AssumeRole'],
      conditions: {
        ArnLike: {
          'aws:SourceArn': `arn:aws:lambda:${stack.region}:${stack.account}:function:${functionName}`,
        },
      },
    }));


    const provider = new customResource.Provider(stack, FORM_METADATA_CUSTOM_RESOURCE, {
      onEventHandler: lambdaFunction,
    });

    return provider;
  }

}