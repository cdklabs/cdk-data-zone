"""
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
"""

import boto3
from botocore.exceptions import ClientError


def handler(event, context):
    """
    AWS Lambda handler function for managing Amazon DataZone form types as a CloudFormation custom resource.

    Args:
        event (dict): The CloudFormation event object containing request details, including 'RequestType' and 'ResourceProperties'.
        context (object): The Lambda context object providing runtime information about the function execution.

    Returns:
        dict: A response dictionary with the following keys:
            - 'Status' (str): 'SUCCESS' or 'FAILED' indicating the outcome.
            - 'PhysicalResourceId' (str): The identifier of the form (used by CloudFormation), included in success cases.
            - 'Data' (dict): Additional data returned to CloudFormation (e.g., form name and revision), empty in failure cases or delete operations.
            - 'Reason' (str, optional): Error message included if 'Status' is 'FAILED'.

    This function handles three CloudFormation request types: 'Create', 'Update', and 'Delete'. It performs the following:
    1. Extracts required parameters (DomainIdentifier, ProjectIdentifier, FormName, FormModelSmithy) and optional parameters (FormDescription, FormStatus) from the event.
    2. Validates that all required parameters are present.
    3. Initializes the Amazon DataZone client.
    4. Executes the appropriate action (create, update, or delete a form type) based on the request type.
    5. Returns a CloudFormation-compatible response, including success data or error details.

    Raises:
        ValueError: If required parameters are missing or the request type is invalid.
        ClientError: If an AWS API call fails (e.g., due to permissions or resource issues).
        Exception: For unexpected errors during execution.
    """
    try:
        # Extract parameters from event
        domain_identifier = event["ResourceProperties"].get("DomainIdentifier")
        project_identifier = event["ResourceProperties"].get("ProjectIdentifier")
        name = event["ResourceProperties"].get("FormName")
        description = event["ResourceProperties"].get("FormDescription", "")
        status = event["ResourceProperties"].get("FormStatus", "ENABLED")
        model_smithy = event["ResourceProperties"].get("FormModelSmithy")

        # Validate required parameters
        if not all([domain_identifier, project_identifier, name, model_smithy]):
            raise ValueError(
                "Invalid event: Missing required fields - DomainIdentifier, ProjectIdentifier, FormName, or FormModelSmithy."
            )

        # Initialize Amazon DataZone client
        client = boto3.client("datazone")

        # Handle Create, Update, or Delete request types
        if event["RequestType"] == "Create":
            response = create_form(
                client,
                domain_identifier,
                project_identifier,
                status,
                name,
                description,
                model_smithy,
            )
            response_data = {"Name": response["name"], "Revision": response["revision"]}
            return {
                "Status": "SUCCESS",
                "PhysicalResourceId": name,
                "Data": response_data,
            }

        elif event["RequestType"] == "Update":
            response = create_form(
                client,
                domain_identifier,
                project_identifier,
                status,
                name,
                description,
                model_smithy,
            )
            response_data = {"Name": response["name"], "Revision": response["revision"]}
            return {
                "Status": "SUCCESS",
                "PhysicalResourceId": name,
                "Data": response_data,
            }

        elif event["RequestType"] == "Delete":
            delete_form(client, domain_identifier, name)
            return {"Status": "SUCCESS", "PhysicalResourceId": name, "Data": {}}

        else:
            raise ValueError(
                f"Invalid RequestType: {event['RequestType']}. Expected 'Create', 'Update', or 'Delete'."
            )

    except ValueError as e:
        print(f"Error processing the event: {e}")
        return {"Status": "FAILED", "Reason": str(e), "Data": {}}

    except ClientError as e:
        print(f"AWS ClientError occurred: {e}")
        return {
            "Status": "FAILED",
            "Reason": f"AWS ClientError: {e.response['Error']['Message']}",
            "Data": {},
        }

    except Exception as e:
        print(f"Unexpected error occurred: {e}")
        return {"Status": "FAILED", "Reason": f"Unexpected error: {str(e)}", "Data": {}}


def create_form(
    client,
    domain_identifier,
    project_identifier,
    status,
    name,
    description,
    model_smithy,
):
    """
    Creates a new form type in Amazon DataZone for the specified domain and project.

    Args:
        client (boto3.client): The Amazon DataZone client instance.
        domain_identifier (str): The identifier of the DataZone domain where the form will be created.
        project_identifier (str): The identifier of the owning project within the domain.
        status (str): The status of the form ('ENABLED' or 'DISABLED').
        name (str): The name of the form type.
        description (str): A description of the form type.
        model_smithy (str): The Smithy model definition for the form as a string.

    Returns:
        dict: The response from the Amazon DataZone client, including 'name' and 'revision' keys.

    Raises:
        ClientError: If the AWS API call fails (e.g., due to invalid parameters or insufficient permissions).

    This function invokes the 'create_form_type' API to create a form type, logs the attempt, and returns the API response.
    If an error occurs, it logs the error and re-raises the exception.
    """
    try:
        print(
            f"Creating Form {name} for domain {domain_identifier} and project {project_identifier}, status {status}"
        )
        return client.create_form_type(
            description=description,
            domainIdentifier=domain_identifier,
            model={"smithy": model_smithy},
            name=name,
            owningProjectIdentifier=project_identifier,
            status=status,
        )
    except ClientError as e:
        print(
            f"Error creating Form {name} for domain {domain_identifier}, project {project_identifier}: {e}"
        )
        raise


def delete_form(client, domain_identifier, name):
    """
    Deletes an existing form type in Amazon DataZone for the specified domain.

    Args:
        client (boto3.client): The Amazon DataZone client instance.
        domain_identifier (str): The identifier of the DataZone domain containing the form.
        name (str): The name of the form type to delete, used as the formTypeIdentifier.

    Returns:
        dict: The response from the Amazon DataZone client (typically empty for delete operations).

    Raises:
        ClientError: If the AWS API call fails (e.g., due to the form not existing or insufficient permissions).

    This function invokes the 'delete_form_type' API to remove a form type, logs the attempt, and returns the API response.
    If an error occurs, it logs the error and re-raises the exception.
    """
    try:
        print(f"Deleting Form {name} for domain {domain_identifier}")
        return client.delete_form_type(
            domainIdentifier=domain_identifier, formTypeIdentifier=name
        )
    except ClientError as e:
        print(f"Error deleting Form {name} for domain {domain_identifier}: {e}")
        raise
