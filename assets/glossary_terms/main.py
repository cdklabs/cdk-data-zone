"""
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
"""

import boto3
from uuid import uuid4
from botocore.exceptions import ClientError


def handler(event, context):
    """
    AWS Lambda handler function for managing Amazon DataZone glossary terms as a CloudFormation custom resource.

    Args:
        event (dict): The CloudFormation event object containing request details, including 'RequestType' and 'ResourceProperties'.
        context (object): The Lambda context object providing runtime information about the function execution.

    Returns:
        dict: A response dictionary with the following keys:
            - 'status' (str): 'SUCCESS' or 'FAILED' indicating the outcome.
            - 'PhysicalResourceId' (str): The glossary term identifier, included in success cases.
            - 'Data' (dict, optional): Additional data returned to CloudFormation (e.g., {'GlossaryTermId': <id>}), included in 'Create' and 'Update' success cases.
            - 'Reason' (str, optional): Error message included if 'status' is 'FAILED'.

    This function handles three CloudFormation request types: 'Create', 'Update', and 'Delete'. It performs the following:
    1. Extracts required parameters (DomainIdentifier, GlossaryIdentifier, Name) and optional parameters (Status, ShortDescription, LongDescription) from the event.
    2. Validates that all required parameters are present, raising ValueError if any are missing.
    3. Sets the default value 'ENABLED' for Status if not provided.
    4. Initializes the Amazon DataZone client.
    5. Executes the appropriate action based on the request type:
       - 'Create': Creates a new glossary term and returns its ID.
       - 'Update': Updates an existing glossary term using the PhysicalResourceId.
       - 'Delete': Disables the glossary term and then deletes it.
    6. Returns a CloudFormation-compatible response, including success data or error details.

    Raises:
        ValueError: If required parameters are missing or the request type is invalid.
        ClientError: If an AWS API call fails (e.g., due to permissions or resource issues).
        Exception: For unexpected errors during execution.
    """
    try:
        # Extract parameters from the event
        domain_identifier = event["ResourceProperties"].get("DomainIdentifier")
        glossary_identifier = event["ResourceProperties"].get("GlossaryIdentifier")
        name = event["ResourceProperties"].get("Name")
        status = event["ResourceProperties"].get("Status", "ENABLED")
        short_description = event["ResourceProperties"].get("ShortDescription")
        long_description = event["ResourceProperties"].get("LongDescription")

        if not domain_identifier or not glossary_identifier or not name:
            raise ValueError("Missing DomainIdentifier, GlossaryIdentifier, or Name.")

        request_type = event.get("RequestType")
        # Initialize Amazon DataZone client
        client = boto3.client("datazone")

        if request_type == "Create":
            glossary_term_id = create_glossary_term(
                client,
                domain_identifier,
                glossary_identifier,
                name,
                short_description,
                long_description,
                status,
            )
            return {
                "status": "SUCCESS",
                "PhysicalResourceId": glossary_term_id,
                "Data": {"GlossaryTermId": glossary_term_id},
            }

        elif request_type == "Update":
            identifier = event.get("PhysicalResourceId")
            update_glossary_term(
                client,
                identifier,
                domain_identifier,
                glossary_identifier,
                name,
                short_description,
                long_description,
                status,
            )
            return {
                "status": "SUCCESS",
                "PhysicalResourceId": identifier,
                "Data": {"GlossaryTermId": identifier},
            }

        elif request_type == "Delete":
            identifier = event.get("PhysicalResourceId")
            update_glossary_term(
                client,
                identifier,
                domain_identifier,
                glossary_identifier,
                name,
                short_description,
                long_description,
                "DISABLED",
            )
            delete_glossary_term(client, identifier, domain_identifier)
            return {
                "status": "SUCCESS",
                "PhysicalResourceId": identifier,
            }

        else:
            raise ValueError(f"Unsupported RequestType: {request_type}")

    except ValueError as ve:
        print(f"Input validation error: {ve}")
        return {"status": "FAILED", "Reason": str(ve)}
    except ClientError as ce:
        print(f"AWS ClientError occurred: {ce}")
        return {
            "status": "FAILED",
            "Reason": f"AWS ClientError: {ce.response['Error']['Message']}",
        }
    except Exception as e:
        print(f"Unexpected error: {e}")
        return {"status": "FAILED", "Reason": f"Unexpected error: {str(e)}"}


def create_glossary_term(
    client,
    domain_identifier,
    glossary_identifier,
    name,
    short_description,
    long_description,
    status,
):
    """
    Creates a new glossary term in Amazon DataZone within the specified domain and glossary.

    Args:
        client (boto3.client): The Amazon DataZone client instance.
        domain_identifier (str): The identifier of the DataZone domain.
        glossary_identifier (str): The identifier of the glossary where the term will be created.
        name (str): The name of the glossary term.
        short_description (str or None): The short description of the glossary term, or None if not provided.
        long_description (str or None): The long description of the glossary term, or None if not provided.
        status (str): The status of the glossary term ('ENABLED' or 'DISABLED').

    Returns:
        str: The identifier of the newly created glossary term.

    Raises:
        ClientError: If the AWS API call fails (e.g., due to invalid parameters or insufficient permissions).
        Exception: For unexpected errors during execution.

    This function generates a unique client token, filters out None values from the arguments, invokes the 'create_glossary_term'
    API, logs the success with the term's ID, and returns the ID. If an error occurs, it logs the error and re-raises the exception.
    """
    try:
        response = client.create_glossary_term(
            **get_non_null_arguments(
                {
                    "clientToken": str(uuid4()),
                    "domainIdentifier": domain_identifier,
                    "glossaryIdentifier": glossary_identifier,
                    "longDescription": long_description,
                    "name": name,
                    "shortDescription": short_description,
                    "status": status,
                }
            )
        )
        print(f"Created glossary term {name}, ID: {response['id']}")
        return response["id"]
    except Exception as e:
        print(f"Failed to create glossary term: {e}")
        raise


def update_glossary_term(
    client,
    identifier,
    domain_identifier,
    glossary_identifier,
    name,
    short_description,
    long_description,
    status,
):
    """
    Updates an existing glossary term in Amazon DataZone within the specified domain and glossary.

    Args:
        client (boto3.client): The Amazon DataZone client instance.
        identifier (str): The identifier of the glossary term to update.
        domain_identifier (str): The identifier of the DataZone domain.
        glossary_identifier (str): The identifier of the glossary containing the term.
        name (str): The updated name of the glossary term.
        short_description (str or None): The updated short description of the glossary term, or None if not provided.
        long_description (str or None): The updated long description of the glossary term, or None if not provided.
        status (str): The updated status of the glossary term ('ENABLED' or 'DISABLED').

    Returns:
        dict: The response from the Amazon DataZone 'update_glossary_term' API call.

    Raises:
        ClientError: If the AWS API call fails (e.g., due to invalid parameters or insufficient permissions).
        Exception: For unexpected errors during execution.

    This function filters out None values from the arguments, invokes the 'update_glossary_term' API, logs the success with the
    term's name and ID, and returns the API response. If an error occurs, it logs the error and re-raises the exception.
    """
    try:
        response = client.update_glossary_term(
            **get_non_null_arguments(
                {
                    "domainIdentifier": domain_identifier,
                    "glossaryIdentifier": glossary_identifier,
                    "identifier": identifier,
                    "longDescription": long_description,
                    "name": name,
                    "shortDescription": short_description,
                    "status": status,
                }
            )
        )
        print(f"Updated glossary term {name}, ID: {identifier}")
        return response
    except Exception as e:
        print(f"Failed to update glossary term: {e}")
        raise


def delete_glossary_term(client, identifier, domain_identifier):
    """
    Deletes an existing glossary term in Amazon DataZone within the specified domain.

    Args:
        client (boto3.client): The Amazon DataZone client instance.
        identifier (str): The identifier of the glossary term to delete.
        domain_identifier (str): The identifier of the DataZone domain.

    Returns:
        dict: The response from the Amazon DataZone 'delete_glossary_term' API call (typically empty).

    Raises:
        ClientError: If the AWS API call fails (e.g., due to the term not existing or insufficient permissions).
        Exception: For unexpected errors during execution.

    This function invokes the 'delete_glossary_term' API, logs the success with the term's ID, and returns the API response.
    If an error occurs, it logs the error and re-raises the exception.
    """
    try:
        response = client.delete_glossary_term(
            domainIdentifier=domain_identifier, identifier=identifier
        )
        print(f"Deleted glossary term ID: {identifier}")
        return response
    except Exception as e:
        print(f"Failed to delete glossary term: {e}")
        raise


def get_non_null_arguments(kwargs):
    """
    Filters out None values from a dictionary of keyword arguments.

    Args:
        kwargs (dict): A dictionary of keyword arguments where values may be None.

    Returns:
        dict: A new dictionary containing only the key-value pairs where the value is not None.

    This utility function is used to prepare arguments for Amazon DataZone API calls by removing optional parameters that
    are not provided (i.e., None), ensuring only valid parameters are passed.
    """
    return {k: v for k, v in kwargs.items() if v is not None}
