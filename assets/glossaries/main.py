"""
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
"""

import boto3
from uuid import uuid4
from botocore.exceptions import ClientError


def handler(event, context):
    """
    AWS Lambda handler function for managing Amazon DataZone glossaries as a CloudFormation custom resource.

    Args:
        event (dict): The CloudFormation event object containing request details, including 'RequestType' and 'ResourceProperties'.
        context (object): The Lambda context object providing runtime information about the function execution.

    Returns:
        dict: A response dictionary with the following keys:
            - 'status' (str): 'SUCCESS' or 'FAILED' indicating the outcome.
            - 'PhysicalResourceId' (str, optional): The glossary identifier, included in success cases.
            - 'Data' (dict, optional): Additional data returned to CloudFormation (e.g., {'GlossaryId': <id>}), included in 'Create' and 'Update' success cases.
            - 'error' (str, optional): Error message included if 'status' is 'FAILED'.

    This function handles three CloudFormation request types: 'Create', 'Update', and 'Delete'. It performs the following:
    1. Extracts required parameters (DomainIdentifier, OwningProjectIdentifier, GlossaryName) and optional parameters (GlossaryStatus, GlossaryDescription) from the event.
    2. Validates that all required parameters are present, raising ValueError if any are missing.
    3. Sets default values for optional parameters: 'ENABLED' for GlossaryStatus and an empty string for GlossaryDescription.
    4. Initializes the Amazon DataZone client.
    5. Executes the appropriate action based on the request type:
       - 'Create': Creates a new glossary and returns its ID.
       - 'Update': Updates an existing glossary using the PhysicalResourceId.
       - 'Delete': Disables the glossary and then deletes it.
    6. Returns a CloudFormation-compatible response, including success data or error details.

    Raises:
        ValueError: If required parameters are missing or the request type is invalid.
        ClientError: If an AWS API call fails (e.g., due to permissions or resource issues).
        Exception: For unexpected errors during execution.
    """
    try:
        # Extract parameters from the event
        domain_identifier = event["ResourceProperties"].get("DomainIdentifier")
        owning_project_identifier = event["ResourceProperties"].get(
            "OwningProjectIdentifier"
        )
        name = event["ResourceProperties"].get("GlossaryName")
        status = event["ResourceProperties"].get("GlossaryStatus")
        description = event["ResourceProperties"].get("GlossaryDescription")

        # Validate required parameters
        if not domain_identifier or not owning_project_identifier or not name:
            raise ValueError(
                "Missing DomainIdentifier, OwningProjectIdentifier, or GlossaryName."
            )

        # Default values for optional parameters
        if not status:
            print(
                f"Status not specified for Glossary {name} in domain {domain_identifier}, project {owning_project_identifier}, defaulting to ENABLED"
            )
            status = "ENABLED"

        if not description:
            print(
                f"Description not specified for Glossary {name} in domain {domain_identifier}, project {owning_project_identifier}, defaulting to empty string."
            )
            description = ""

        # Initialize Amazon DataZone client
        client = boto3.client("datazone")

        # Handle the different request types
        if event["RequestType"] == "Create":
            glossary_id = create_glossary(
                client,
                domain_identifier,
                owning_project_identifier,
                name,
                description,
                status,
            )
            response_data = {"GlossaryId": glossary_id}
            return {
                "status": "SUCCESS",
                "PhysicalResourceId": glossary_id,
                "Data": response_data,
            }

        elif event["RequestType"] == "Update":
            identifier = event["PhysicalResourceId"]
            update_glossary(
                client, identifier, domain_identifier, name, description, status
            )
            response_data = {"GlossaryId": identifier}
            return {
                "status": "SUCCESS",
                "PhysicalResourceId": identifier,
                "Data": response_data,
            }

        elif event["RequestType"] == "Delete":
            identifier = event["PhysicalResourceId"]
            update_glossary(
                client, identifier, domain_identifier, name, description, "DISABLED"
            )
            delete_glossary(client, identifier, domain_identifier)
            return {"status": "SUCCESS", "PhysicalResourceId": identifier}

        else:
            raise ValueError(
                f"Invalid RequestType: {event['RequestType']}. Expected 'Create', 'Update', or 'Delete'."
            )

    except ValueError as e:
        print(f"Error processing the event: {e}")
        return {"status": "FAILED", "error": str(e)}

    except ClientError as e:
        print(f"AWS ClientError occurred: {e}")
        return {
            "status": "FAILED",
            "error": f"AWS ClientError: {e.response['Error']['Message']}",
        }

    except Exception as e:
        print(f"Unexpected error occurred: {e}")
        return {"status": "FAILED", "error": f"Unexpected error: {str(e)}"}


def create_glossary(
    client, domain_identifier, owning_project_identifier, name, description, status
):
    """
    Creates a new glossary in Amazon DataZone.

    Args:
        client (boto3.client): The Amazon DataZone client instance.
        domain_identifier (str): The identifier of the DataZone domain where the glossary will be created.
        owning_project_identifier (str): The identifier of the owning project within the domain.
        name (str): The name of the glossary.
        description (str): The description of the glossary.
        status (str): The status of the glossary ('ENABLED' or 'DISABLED').

    Returns:
        str: The identifier of the newly created glossary.

    Raises:
        ClientError: If the AWS API call fails (e.g., due to invalid parameters or insufficient permissions).

    This function invokes the 'create_glossary' API to create a glossary, logs the attempt and success, and returns the glossary ID.
    If an error occurs, it logs the error and re-raises the exception.
    """
    try:
        print(
            f"Creating new glossary with name {name} for domain {domain_identifier} project {owning_project_identifier}"
        )
        create_response = client.create_glossary(
            clientToken=str(uuid4()),
            description=description,
            domainIdentifier=domain_identifier,
            name=name,
            owningProjectIdentifier=owning_project_identifier,
            status=status,
        )
        glossary_id = create_response["id"]
        print(
            f"Successfully created new glossary with name {name} for domain {domain_identifier} project {owning_project_identifier}, received id {glossary_id}"
        )
        return glossary_id

    except ClientError as e:
        print(
            f"Error creating glossary with name {name} for domain {domain_identifier} and project {owning_project_identifier}: {e}"
        )
        raise


def update_glossary(client, identifier, domain_identifier, name, description, status):
    """
    Updates an existing glossary in Amazon DataZone.

    Args:
        client (boto3.client): The Amazon DataZone client instance.
        identifier (str): The identifier of the glossary to update.
        domain_identifier (str): The identifier of the DataZone domain where the glossary exists.
        name (str): The new name of the glossary.
        description (str): The new description of the glossary.
        status (str): The new status of the glossary ('ENABLED' or 'DISABLED').

    Returns:
        dict: The response from the Amazon DataZone 'update_glossary' API call.

    Raises:
        ClientError: If the AWS API call fails (e.g., due to invalid parameters or insufficient permissions).

    This function invokes the 'update_glossary' API to modify a glossary, logs the success, and returns the API response.
    If an error occurs, it logs the error and re-raises the exception.
    """
    try:
        response = client.update_glossary(
            clientToken=str(uuid4()),
            description=description,
            domainIdentifier=domain_identifier,
            identifier=identifier,
            name=name,
            status=status,
        )
        print(
            f"Successfully updated glossary with name {name} and id {identifier} for domain {domain_identifier}"
        )
        return response
    except ClientError as e:
        print(f"Error updating glossary with id {identifier}: {e}")
        raise


def delete_glossary(client, identifier, domain_identifier):
    """
    Deletes an existing glossary in Amazon DataZone.

    Args:
        client (boto3.client): The Amazon DataZone client instance.
        identifier (str): The identifier of the glossary to delete.
        domain_identifier (str): The identifier of the DataZone domain where the glossary exists.

    Returns:
        dict: The response from the Amazon DataZone 'delete_glossary' API call (typically empty).

    Raises:
        ClientError: If the AWS API call fails (e.g., due to the glossary not existing or insufficient permissions).

    This function invokes the 'delete_glossary' API to remove a glossary, logs the attempt and success, and returns the API response.
    If an error occurs, it logs the error and re-raises the exception.
    """
    try:
        print(f"Deleting glossary with id {identifier} for domain {domain_identifier}")
        response = client.delete_glossary(
            domainIdentifier=domain_identifier, identifier=identifier
        )
        print(f"Successfully deleted glossary with id {identifier}")
        return response
    except ClientError as e:
        print(
            f"Failed to delete glossary with id {identifier} for domain {domain_identifier}: {e}"
        )
        raise
