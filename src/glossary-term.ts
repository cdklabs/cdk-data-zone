// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as customResource from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { IGlossary } from './glossary';
import { Project } from './project';


const IS_GLOSSARY_TERM = Symbol.for('amazon-datazone.GlossaryTerm');
const GLOSSARY_TERM_CUSTOM_RESOURCE = 'glossary-term-custom-resource';

export interface GlossaryTermProps {

  readonly glossary: IGlossary;

  readonly name: string;

  readonly description?: string;

  readonly shortDescription?: string;

  readonly longDescription?: string;

  readonly enabled?: boolean;
}

export interface IGlossaryTerm extends cdk.IResource {

  /**
     * @attribute
     */
  readonly glossaryTermId: string;

}

export abstract class GlossaryTermBase extends cdk.Resource implements IGlossaryTerm {

  /**
     * @attribute
     */
  readonly abstract glossaryTermId: string;

}

export class GlossaryTerm extends GlossaryTermBase {

  private customResourceProvider: customResource.Provider;

  /**
     * @attribute
     */
  readonly glossaryTermId: string;

  readonly project: Project;

  readonly glossary: IGlossary;

  constructor(scope: Construct, id: string, props: GlossaryTermProps) {
    super(scope, id);

    this.project = props.glossary.project;
    this.glossary = props.glossary;

    const stack = cdk.Stack.of(scope);

    this.customResourceProvider = stack.node.tryFindChild(GLOSSARY_TERM_CUSTOM_RESOURCE) as customResource.Provider
        ?? this.createGlossaryTermProvider(stack);

    const resource = new cdk.CustomResource(this, 'glossaryterm', {
      serviceToken: this.customResourceProvider.serviceToken,
      properties: {
        DomainIdentifier: props.glossary.project.projectDomainId,
        GlossaryIdentifier: this.glossary.glossaryId,
        Name: props.name,
        ShortDescription: props.shortDescription,
        LongDescription: props.longDescription,
        TermRelations: {},
        Status: props.enabled ?? true ? 'ENABLED' : 'DISABLED',
      },
    });

    this.glossaryTermId = resource.getAttString('GlossaryTermId');

    Object.defineProperty(this, IS_GLOSSARY_TERM, { value: true });
  }

  private createGlossaryTermProvider(stack: cdk.Stack) {

    const functionName = cdk.Names.uniqueId(stack) + '-glossary-terms';

    const lambdaFunction = new lambda.Function(stack, GLOSSARY_TERM_CUSTOM_RESOURCE + 'Lambda', {
      functionName,
      runtime: lambda.Runtime.PYTHON_3_12,
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../assets/glossary-terms')),
      handler: 'main.handler',
      memorySize: 1024,
      timeout: cdk.Duration.minutes(5),
      tracing: lambda.Tracing.ACTIVE,
      currentVersionOptions: {
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      },
      role: this.project.managementRole,
    });

    this.project.managementRole.assumeRolePolicy?.addStatements(new iam.PolicyStatement({
      principals: [new iam.ServicePrincipal('lambda.amazonaws.com')],
      actions: ['sts:AssumeRole'],
      conditions: {
        ArnLike: {
          'aws:SourceArn': `arn:aws:lambda:${stack.region}:${stack.account}:function:${functionName}`,
        },
      },
    }));

    lambdaFunction.node.addDependency(this.project.membership);

    const provider = new customResource.Provider(stack, GLOSSARY_TERM_CUSTOM_RESOURCE, {
      onEventHandler: lambdaFunction,
    });

    return provider;
  }
}