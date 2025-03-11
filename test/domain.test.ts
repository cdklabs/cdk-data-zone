// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Domain, SingleSignOnType, AssignmentType, BlueprintEnvironmentIdentifiers } from '../lib';

describe('Domain', () => {
  let stack: cdk.Stack;
  let domain: Domain;

  beforeEach(() => {
    stack = new cdk.Stack();
    domain = new Domain(stack, 'TestDomain', {
      name: 'TestDomainName',
      description: 'Test Domain Description',
    });
  });

  test('creates a domain with correct properties', () => {
    expect(domain.name).toBe('TestDomainName');
    expect(domain.description).toBe('Test Domain Description');
    expect(domain.domainExecutionRole).toBeDefined();
  });

  test('creates a CfnDomain resource', () => {
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::DataZone::Domain', {
      Name: 'TestDomainName',
      Description: 'Test Domain Description',
    });
  });

  test('addSingleSignOn method updates single sign-on configuration', () => {
    domain.addSingleSignOn({
      ssoType: SingleSignOnType.IAM_IDC,
      userAssignment: AssignmentType.AUTOMATIC,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::DataZone::Domain', {
      SingleSignOn: {
        Type: 'IAM_IDC',
        UserAssignment: 'AUTOMATIC',
      },
    });
  });

  test('enableBlueprint method creates a Blueprint', () => {
    const blueprint = domain.enableBlueprint(BlueprintEnvironmentIdentifiers.DEFAULT_DATA_LAKE, {
      enabledRegions: ['us-west-2'],
    });

    expect(blueprint).toBeDefined();
  });

  test('createProject method creates a Project', () => {
    const project = domain.createProject('TestProject', {
      name: 'Test Project',
      description: 'Test Project Description',
    });

    expect(project).toBeDefined();
  });
});
