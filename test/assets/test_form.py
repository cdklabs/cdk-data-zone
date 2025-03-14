"""
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
"""

import pytest
from botocore.exceptions import ClientError
from unittest.mock import MagicMock, patch
from assets.form.main import handler, create_form, delete_form


@pytest.fixture
def mock_boto3_client():
    """Mock Amazon DataZone client using MagicMock."""
    with patch("boto3.client") as mock:
        mock_client = MagicMock()
        mock.return_value = mock_client
        yield mock_client

def test_handler_create_success(mock_boto3_client):
    """Test Lambda handler for a successful Create request."""
    mock_boto3_client.create_form_type.return_value = {"name": "TestForm", "revision": "1"}
    
    event = {
        "RequestType": "Create",
        "ResourceProperties": {
            "DomainIdentifier": "dzd_test-domain",
            "ProjectIdentifier": "test-project",
            "FormName": "TestForm",
            "FormDescription": "Test Description",
            "FormStatus": "ENABLED",
            "FormModelSmithy": "{}"
        }
    }
    response = handler(event, None)
    assert response["Status"] == "SUCCESS"
    assert response["PhysicalResourceId"] == "TestForm"
    assert response["Data"]["Name"] == "TestForm"
    assert response["Data"]["Revision"] == "1"


def test_handler_update_success(mock_boto3_client):
    """Test Lambda handler for a successful Update request."""
    mock_boto3_client.create_form_type.return_value = {"name": "TestForm", "revision": "2"}
    
    event = {
        "RequestType": "Update",
        "ResourceProperties": {
            "DomainIdentifier": "dzd_test-domain",
            "ProjectIdentifier": "test-project",
            "FormName": "TestForm",
            "FormDescription": "Updated Description",
            "FormStatus": "ENABLED",
            "FormModelSmithy": "{}"
        }
    }
    response = handler(event, None)
    assert response["Status"] == "SUCCESS"
    assert response["PhysicalResourceId"] == "TestForm"
    assert response["Data"]["Name"] == "TestForm"
    assert response["Data"]["Revision"] == "2"


def test_handler_delete_success(mock_boto3_client):
    """Test Lambda handler for a successful Delete request."""
    mock_boto3_client.delete_form_type.return_value = {}
    
    event = {
        "RequestType": "Delete",
        "ResourceProperties": {
            "DomainIdentifier": "dzd_test-domain",
            "ProjectIdentifier": "test-project",
            "FormName": "TestForm",
            "FormModelSmithy": "{}"
        }
    }
    response = handler(event, None)
    assert response["Status"] == "SUCCESS"
    assert response["PhysicalResourceId"] == "TestForm"
    assert response["Data"] == {}


def test_handler_create_access_denied(mock_boto3_client):
    """Test Lambda handler when a ClientError (AccessDeniedException) occurs during Create."""
    mock_boto3_client.create_form_type.side_effect = ClientError(
        {"Error": {"Code": "AccessDeniedException", "Message": "User is not permitted to perform operation: CreateFormType"}},
        "create_form_type"
    )
    
    event = {
        "RequestType": "Create",
        "ResourceProperties": {
            "DomainIdentifier": "dzd_test-domain",
            "ProjectIdentifier": "test-project",
            "FormName": "TestForm",
            "FormDescription": "Test Description",
            "FormStatus": "ENABLED",
            "FormModelSmithy": "{}"
        }
    }
    response = handler(event, None)
    assert response["Status"] == "FAILED"
    assert "AWS ClientError: User is not permitted to perform operation: CreateFormType" in response["Reason"]
    assert response["Data"] == {}


def test_handler_delete_access_denied(mock_boto3_client):
    """Test Lambda handler when a ClientError (AccessDeniedException) occurs during Delete."""
    mock_boto3_client.delete_form_type.side_effect = ClientError(
        {"Error": {"Code": "AccessDeniedException", "Message": "User is not permitted to perform operation: DeleteFormType"}},
        "delete_form_type"
    )
    
    event = {
        "RequestType": "Delete",
        "ResourceProperties": {
            "DomainIdentifier": "dzd_test-domain",
            "ProjectIdentifier": "test-project",
            "FormName": "TestForm",
            "FormModelSmithy": "{}"
        }
    }
    response = handler(event, None)
    assert response["Status"] == "FAILED"
    assert "AWS ClientError: User is not permitted to perform operation: DeleteFormType" in response["Reason"]
    assert response["Data"] == {}


def test_handler_missing_parameters():
    """Test Lambda handler when required parameters are missing."""
    event = {
        "RequestType": "Create",
        "ResourceProperties": {
            "DomainIdentifier": "dzd_test-domain",
            "ProjectIdentifier": "test-project"
        }
    }
    response = handler(event, None)
    assert response["Status"] == "FAILED"
    assert "Invalid event: Missing required fields - DomainIdentifier, ProjectIdentifier, FormName, or FormModelSmithy." in response["Reason"]
    assert response["Data"] == {}


def test_handler_invalid_request_type():
    """Test Lambda handler when an invalid RequestType is provided."""
    event = {
        "RequestType": "Invalid",
        "ResourceProperties": {
            "DomainIdentifier": "dzd_test-domain",
            "ProjectIdentifier": "test-project",
            "FormName": "TestForm",
            "FormModelSmithy": "{}"
        }
    }
    response = handler(event, None)
    assert response["Status"] == "FAILED"
    assert "Invalid RequestType: Invalid. Expected 'Create', 'Update', or 'Delete'." in response["Reason"]
    assert response["Data"] == {}


def test_create_form_success(mock_boto3_client):
    """Test successful form creation."""
    mock_boto3_client.create_form_type.return_value = {"name": "TestForm", "revision": "1"}
    response = create_form(mock_boto3_client, "dzd_test-domain", "test-project", "ENABLED", "TestForm", "Test Description", "{}")
    assert response["name"] == "TestForm"
    assert response["revision"] == "1"


def test_create_form_failure(mock_boto3_client):
    """Test form creation failure due to ClientError."""
    mock_boto3_client.create_form_type.side_effect = ClientError(
        {"Error": {"Code": "ValidationError", "Message": "Invalid input"}}, "create_form_type"
    )
    with pytest.raises(ClientError) as exc_info:
        create_form(mock_boto3_client, "dzd_test-domain", "test-project", "ENABLED", "TestForm", "Test Description", "{}")
    assert exc_info.value.response["Error"]["Code"] == "ValidationError"
    assert exc_info.value.response["Error"]["Message"] == "Invalid input"


def test_delete_form_success(mock_boto3_client):
    """Test successful form deletion."""
    mock_boto3_client.delete_form_type.return_value = {}
    response = delete_form(mock_boto3_client, "dzd_test-domain", "TestForm")
    assert response == {}


def test_delete_form_failure(mock_boto3_client):
    """Test form deletion failure due to ClientError."""
    mock_boto3_client.delete_form_type.side_effect = ClientError(
        {"Error": {"Code": "NotFound", "Message": "Form not found"}}, "delete_form_type"
    )
    with pytest.raises(ClientError) as exc_info:
        delete_form(mock_boto3_client, "dzd_test-domain", "TestForm")
    assert exc_info.value.response["Error"]["Code"] == "NotFound"
    assert exc_info.value.response["Error"]["Message"] == "Form not found"