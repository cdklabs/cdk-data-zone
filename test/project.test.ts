// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Domain, Forms, Glossaries } from '../lib';

describe('Project', () => {

  let stack: cdk.Stack;
  let domain: Domain;

  beforeEach(() => {
    const app = new cdk.App();
    stack = new cdk.Stack(app, 'TestStack');
    domain = new Domain(stack, 'TestDomain', {
      name: 'test-domain',
    });
  });

  test('creates a project', () => {
    domain.createProject('TestProject', {
      name: 'test-project',
      description: 'Test Project',
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::DataZone::Project', {
      Name: 'test-project',
      Description: 'Test Project',
      DomainIdentifier: {
        'Fn::GetAtt': [Match.stringLikeRegexp('TestDomain.*'), 'Id'],
      },
    });
  });

  test('create project with glossaries', () => {
    domain.createProject('TestProject', {
      name: 'test-project',
      description: 'Test Project',
      glossaries: Glossaries.fromInline({
        name: 'test-glossary',
        description: 'Glossary description',
        terms: [{
          name: 'term1',
          shortDescription: 'shortTerm1',
          longDescription: 'longTerm1',
        }, {
          name: 'term2',
          shortDescription: 'shortTerm2',
          longDescription: 'longTerm2',
        }],
      }),
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::DataZone::Project', {
      Name: 'test-project',
    });

    template.hasResourceProperties('AWS::CloudFormation::CustomResource', {
      GlossaryName: 'test-glossary',
      GlossaryDescription: 'Glossary description',
    });

    template.hasResourceProperties('AWS::CloudFormation::CustomResource', {
      Name: 'term1',
      ShortDescription: 'shortTerm1',
      LongDescription: 'longTerm1',
      Status: 'ENABLED',
    });

    template.hasResourceProperties('AWS::CloudFormation::CustomResource', {
      Name: 'term2',
      ShortDescription: 'shortTerm2',
      LongDescription: 'longTerm2',
      Status: 'ENABLED',
    });
  });

  test('create project with form', () => {
    domain.createProject('TestProject', {
      name: 'test-project',
      description: 'Test Project',
      forms: Forms.fromInline({
        name: 'ScheduleDataRefresh',
        description: 'Indicate data refresh schedule',
        smithyModel: 'test form',
      }),
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::DataZone::Project', {
      Name: 'test-project',
    });

    template.hasResourceProperties('AWS::CloudFormation::CustomResource', {
      FormName: 'ScheduleDataRefresh',
      FormDescription: 'Indicate data refresh schedule',
      FormModelSmithy: 'test form',
    });
  });
});