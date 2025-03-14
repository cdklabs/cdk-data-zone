# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0

source .venv/bin/activate
export PYTHONPATH=$(pwd)
pytest test/assets/ --cov=./ --cov-report=term-missing --cov-report=html --cov-fail-under=80 -v