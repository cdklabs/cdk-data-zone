// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as customResource from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { GlossaryTerm } from './glossary-term';
import { Project } from './project';

const IS_GLOSSARY = Symbol.for('amazon-datazone.Glossary');
const GLOSSARY_CUSTOM_RESOURCE = 'glossary-custom-resource';


export interface GlossaryTermOptions {

  readonly name: string;

  readonly description?: string;

  readonly shortDescription?: string;

  readonly longDescription?: string;

  readonly enabled?: boolean;
}

export interface GlossaryProps {

  readonly project: Project;

  readonly name: string;

  readonly description: string;

  readonly terms?: GlossaryTermOptions[];
}

export interface IGlossary extends cdk.IResource {

  /**
     * @attribute
     */
  readonly glossaryId: string;

  readonly project: Project;

  addGlossaryTerms(terms: GlossaryTermOptions[]): GlossaryTerm[];
}

export abstract class GlossaryBase extends cdk.Resource implements IGlossary {

  /**
     * @attribute
     */
  readonly abstract glossaryId: string;

  readonly abstract project: Project;

  abstract addGlossaryTerms(terms: GlossaryTermOptions[]): GlossaryTerm[];
}

export class Glossary extends GlossaryBase {

  private customResourceProvider: customResource.Provider;

  /**
     * @attribute
     */
  readonly glossaryId: string;

  readonly project: Project;

  constructor(scope: Construct, id: string, props: GlossaryProps) {
    super(scope, id);

    this.project = props.project;

    const stack = cdk.Stack.of(scope);

    this.customResourceProvider = stack.node.tryFindChild(GLOSSARY_CUSTOM_RESOURCE) as customResource.Provider ?? this.createGlossaryProvider(stack);

    const resource = new cdk.CustomResource(this, 'glossary', {
      serviceToken: this.customResourceProvider.serviceToken,
      properties: {
        DomainIdentifier: props.project.projectDomainId,
        OwningProjectIdentifier: props.project.projectId,
        GlossaryName: props.name,
        GlossaryDescription: props.description,
      },
    });

    this.glossaryId = resource.getAttString('GlossaryId');

    if (props.terms) {
      this.addGlossaryTerms(props.terms);
    }

    Object.defineProperty(this, IS_GLOSSARY, { value: true });
  }


  private createGlossaryProvider(stack: cdk.Stack) {

    const functionName = cdk.Names.uniqueId(stack) + '-glossary';

    const lambdaFunction = new lambda.Function(stack, GLOSSARY_CUSTOM_RESOURCE + 'Lambda', {
      functionName,
      runtime: lambda.Runtime.PYTHON_3_12,
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../assets/glossaries')),
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

    const provider = new customResource.Provider(stack, GLOSSARY_CUSTOM_RESOURCE, {
      onEventHandler: lambdaFunction,
    });

    return provider;
  }

  addGlossaryTerms(terms: GlossaryTermOptions[]): GlossaryTerm[] {
    return terms.map(term => new GlossaryTerm(this, `${this.node.id}#${term.name}`, {
      ...term,
      glossary: this,
    }));
  }
}