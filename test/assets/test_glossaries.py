"""
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
"""

import pytest
from botocore.exceptions import ClientError
from unittest.mock import MagicMock, patch
from uuid import uuid4
from assets.glossaries.main import handler, create_glossary, update_glossary, delete_glossary


@pytest.fixture
def mock_boto3_client():
    """Mock Amazon DataZone client using MagicMock."""
    with patch("boto3.client") as mock:
        mock_client = MagicMock()
        mock.return_value = mock_client
        yield mock_client


@pytest.fixture
def mock_event():
    """Returns a sample event structure for the Lambda function."""
    return {
        "RequestType": "Create",
        "ResourceProperties": {
            "DomainIdentifier": "dzd_test-domain",
            "OwningProjectIdentifier": "test-project",
            "GlossaryName": "TestGlossary",
            "GlossaryStatus": "ENABLED",
            "GlossaryDescription": "Test Description",
        },
    }


def test_create_glossary(mock_boto3_client):
    """Test successful glossary creation."""
    glossary_id = str(uuid4())
    mock_boto3_client.create_glossary.return_value = {"id": glossary_id}
    
    response = create_glossary(
        mock_boto3_client,
        "dzd_test-domain",
        "test-project",
        "TestGlossary",
        "Test Description",
        "ENABLED",
    )
    assert isinstance(response, str)  # Should return a glossary ID
    assert response == glossary_id


def test_update_glossary(mock_boto3_client):
    """Test successful glossary update."""
    glossary_id = str(uuid4())
    mock_boto3_client.update_glossary.return_value = {"id": glossary_id}
    
    response = update_glossary(
        mock_boto3_client,
        glossary_id,
        "dzd_test-domain",
        "UpdatedGlossary",
        "Updated Description",
        "ENABLED",
    )
    assert response == {"id": glossary_id}  # Verify the update response


def test_delete_glossary(mock_boto3_client):
    """Test successful glossary deletion."""
    glossary_id = str(uuid4())
    mock_boto3_client.delete_glossary.return_value = {}
    
    response = delete_glossary(mock_boto3_client, glossary_id, "dzd_test-domain")
    assert response == {}  # Verify the deletion response


def test_handler_create_success(mock_event, mock_boto3_client):
    """Test Lambda handler for a successful Create request."""
    glossary_id = str(uuid4())
    mock_boto3_client.create_glossary.return_value = {"id": glossary_id}
    
    response = handler(mock_event, None)
    assert response["status"] == "SUCCESS"
    assert response["PhysicalResourceId"] == glossary_id
    assert "GlossaryId" in response["Data"]
    assert response["Data"]["GlossaryId"] == glossary_id


def test_handler_update_success(mock_event, mock_boto3_client):
    """Test Lambda handler for a successful Update request."""
    glossary_id = str(uuid4())
    mock_event["RequestType"] = "Update"
    mock_event["PhysicalResourceId"] = glossary_id
    mock_boto3_client.update_glossary.return_value = {"id": glossary_id}
    
    response = handler(mock_event, None)
    assert response["status"] == "SUCCESS"
    assert response["PhysicalResourceId"] == glossary_id
    assert "GlossaryId" in response["Data"]
    assert response["Data"]["GlossaryId"] == glossary_id


def test_handler_delete_success(mock_event, mock_boto3_client):
    """Test Lambda handler for a successful Delete request."""
    glossary_id = str(uuid4())
    mock_event["RequestType"] = "Delete"
    mock_event["PhysicalResourceId"] = glossary_id
    mock_boto3_client.update_glossary.return_value = {"id": glossary_id}
    mock_boto3_client.delete_glossary.return_value = {}
    
    response = handler(mock_event, None)
    assert response["status"] == "SUCCESS"
    assert response["PhysicalResourceId"] == glossary_id


def test_handler_missing_parameters(mock_event):
    """Test Lambda handler when required parameters are missing."""
    mock_event["ResourceProperties"].pop("DomainIdentifier")
    
    response = handler(mock_event, None)
    assert response["status"] == "FAILED"
    assert "Missing" in response["error"]


def test_handler_client_error(mock_event, mock_boto3_client):
    """Test Lambda handler when a ClientError occurs."""
    mock_boto3_client.create_glossary.side_effect = ClientError(
        {"Error": {"Code": "AccessDeniedException", "Message": "Permission Denied"}},
        "create_glossary",
    )
    
    response = handler(mock_event, None)
    assert response["status"] == "FAILED"
    assert "AWS ClientError" in response["error"]


def test_handler_unexpected_exception(mock_event, mock_boto3_client):
    """Test Lambda handler when an unexpected exception occurs."""
    mock_boto3_client.create_glossary.side_effect = Exception("Unexpected Error")
    
    response = handler(mock_event, None)
    assert response["status"] == "FAILED"
    assert "Unexpected error" in response["error"]