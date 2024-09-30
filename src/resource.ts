// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import * as datazone from 'aws-cdk-lib/aws-datazone';

export interface IResource extends cdk.IResource {

  /**
   * The timestamp of when the data source was created.
   *
   * @cloudformationAttribute CreatedAt
   * @attribute
   */
  readonly createdAt: string;

  /**
   * The timestamp of when the data source was updated.
   *
   * @cloudformationAttribute UpdatedAt
   * @attribute
   */
  readonly updatedAt: string;
}

export abstract class ResourceBase extends cdk.Resource {

  /**
   * The timestamp of when the data source was created.
   *
   * @cloudformationAttribute CreatedAt
   * @attribute
   */
  readonly abstract createdAt: string;

  /**
   * The timestamp of when the data source was updated.
   *
   * @cloudformationAttribute UpdatedAt
   * @attribute
   */
  readonly abstract updatedAt: string;

}

export interface CronOptions {
  /**
   * The minute to run this rule at
   *
   * @default - Every minute
   */
  readonly minute?: string;

  /**
   * The hour to run this rule at
   *
   * @default - Every hour
   */
  readonly hour?: string;

  /**
   * The day of the month to run this rule at
   *
   * @default - Every day of the month
   */
  readonly day?: string;

  /**
   * The month to run this rule at
   *
   * @default - Every month
   */
  readonly month?: string;

  /**
   * The year to run this rule at
   *
   * @default - Every year
   */
  readonly year?: string;

  /**
   * The day of the week to run this rule at
   *
   * @default - Any day of the week
   */
  readonly weekDay?: string;

  readonly timeZone?: string;
}

export class Schedule {

  public static fromCron(options: CronOptions) {

    function fallback<T>(x: T | undefined, def: T): T {
      return x ?? def;
    }

    const minute = fallback(options.minute, '*');
    const hour = fallback(options.hour, '*');
    const month = fallback(options.month, '*');
    const year = fallback(options.year, '*');

    // Weekday defaults to '?' if not supplied. If it is supplied, day must become '?'
    const day = fallback(options.day, options.weekDay !== undefined ? '?' : '*');
    const weekDay = fallback(options.weekDay, '?');

    const expressionString: string = `cron(${minute} ${hour} ${day} ${month} ${weekDay} ${year})`;
    return new Schedule(expressionString, options.timeZone);
  }

  private constructor(public readonly expression: string, public readonly timezone?: string) {

  }
}

export interface IDataSourceConfiguration {

  readonly type: string;

  readonly configuration: datazone.CfnDataSource.DataSourceConfigurationInputProperty;
}