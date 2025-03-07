// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Domain, Project, Environment } from '../lib';

describe('Environment', () => {

  let stack: cdk.Stack;
  let domain: Domain;
  let project: Project;
  const app = new cdk.App();
  stack = new cdk.Stack(app, 'TestStack');


  beforeEach(() => {
    domain = new Domain(stack, 'TestDomain', {
      name: 'test-domain',
    });
    project = domain.createProject('TestProject', {
      name: 'test-project',
      description: 'Test Project',
    });
    domain.enableBlueprint('testcustom1234');

  });
  let envActionRole = new iam.Role(stack, 'EnvActionRole', {
    roleName: 'EnvironmentActionBYORRole',
    assumedBy: new iam.CompositePrincipal(
      new iam.ServicePrincipal('datazone.amazonaws.com'),
      new iam.ServicePrincipal('datazone.aws.internal'),
      new iam.ServicePrincipal('niceland.aws.internal'),
      new iam.AccountPrincipal(cdk.Stack.of(stack).account), // Equivalent to root principal for the current account
    ),
    inlinePolicies: {
      EnvActionAccessPolicy: new iam.PolicyDocument({
        statements: [
          new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['s3:*', 'datazone:*'],
            resources: ['*'],
          }),
        ],
      }),
    },
  });

  // Additional AssumeRole permission for root account
  envActionRole.assumeRolePolicy?.addStatements(
    new iam.PolicyStatement({
      sid: '',
      effect: iam.Effect.ALLOW,
      principals: [new iam.AccountPrincipal(cdk.Stack.of(stack).account)], // Root account access
      actions: ['sts:AssumeRole'],
    }),
  );

  test('creates a custom service environment', () => {
    new Environment(stack, 'testEnvironment', {
      environmentBlueprintId: 'ca1cnpesm1jx47',
      name: 'test-environment',
      project: project,
      environmentRole: envActionRole,
      environmentAccountId: cdk.Stack.of(stack).account,
      environmentAccountRegion: 'us-east-1',
      description: 'Test Environment',

    });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::DataZone::Environment', {
      Name: 'test-environment',
      Description: 'Test Environment',
      DomainIdentifier: {
        'Fn::GetAtt': [Match.stringLikeRegexp('TestDomain.*'), 'DomainId'],
      },
      EnvironmentRoleArn: {
        'Fn::GetAtt': [Match.stringLikeRegexp('EnvActionRole.*'), 'Arn'],
      },
    });
  });

});