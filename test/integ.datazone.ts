// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/// !cdk-integ IntegrationTestStack
import 'source-map-support/register';
import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, Stack } from 'aws-cdk-lib';
import { Key } from 'aws-cdk-lib/aws-kms';
import { BlueprintEnvironmentIdentifiers, Domain, Environment, EnvironmentProfile, Forms, Glossaries } from '../lib';
import * as path from 'path';

// CDK App for Integration Tests
const app = new App();
// Add the cdk-nag AwsSolutions Pack with extra verbose logging enabled.
// Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));

// Stack under test
const stack = new Stack(app, 'TestStack', {
});

const domain = new Domain(stack, 'Domain', {
  name: 'integration',
  encryptionKey: new Key(stack, 'Key', { enableKeyRotation: true }),
});

const blueprint = domain.enableBlueprint(BlueprintEnvironmentIdentifiers.DEFAULT_DATA_LAKE);

const project = domain.createProject('test-project', {
  name: 'test-project',
  glossaries: Glossaries.fromFile(path.resolve(__dirname, './resources/glossaries.json')),
  forms: Forms.fromFile(path.resolve(__dirname, './resources/form-metadata.json')),
});

const environmentProfile = new EnvironmentProfile(stack, 'EnvironmentProfile', {
  name: 'dev',
  blueprint,
  project,
});

new Environment(stack, 'environment', {
    project,
    name: 'DEV',
    environmentProfile,
});

new IntegTest(app, 'DataFlowTest', {
  testCases: [stack], // Define a list of cases for this test
  cdkCommandOptions: {
    // Customize the integ-runner parameters
    destroy: {
      args: {
        force: true,
      },
    },
  },
});

// /**
//  * Assertion:
//  * The application should handle single message and write the enriched item to the DynamoDB table.
//  */
// const id = 'test-id-1';
// const message = 'This message should be validated';
// /**
//  * Publish a message to the SNS topic.
//  * Note - SNS topic ARN is a member variable of the
//  * application stack for testing purposes.
//  */
// integ.assertions
//   .awsApiCall('DataZone', 'listDomain', {
    
//   }).expect(
//     ExpectedResult.objectLike({
//       Items: [
//         {
//           id: id,
//           message: message,
//         },
//       ],
//     }),
//   ).waitForAssertions({
//     totalTimeout: Duration.seconds(25),
//     interval: Duration.seconds(3),
//   });
// //   /**
// //    * Validate that the DynamoDB table contains the enriched message.
// //    */
// //   .next(
// //     integ.assertions
// //       .awsApiCall('DynamoDB', 'getItem', {
// //         TableName: stackUnderTest.tableName,
// //         Key: { id: { S: id } },
// //       })
// //       /**
// //        * Expect the enriched message to be returned.
// //        */
// //       .expect(
// //         ExpectedResult.objectLike({
// //           Item: {
// //             id: {
// //               S: id,
// //             },
// //             message: {
// //               S: message,
// //             },
// //             additionalAttr: {
// //               S: 'enriched',
// //             },
// //           },
// //         }),
// //       )
// //       /**
// //        * Timeout and interval check for assertion to be true.
// //        * Note - Data may take some time to arrive in DynamoDB.
// //        * Iteratively executes API call at specified interval.
// //        */
// //       .waitForAssertions({
// //         totalTimeout: Duration.seconds(25),
// //         interval: Duration.seconds(3),
// //       }),
// //   );

// // // Add the required permissions to the api call
// // assertion.provider.addToRolePolicy({
// //   Effect: 'Allow',
// //   Action: [
// //     'kms:Encrypt',
// //     'kms:ReEncrypt*',
// //     'kms:GenerateDataKey*',
// //     'kms:Decrypt',
// //   ],
// //   Resource: [stackUnderTest.kmsKeyArn],
// // });