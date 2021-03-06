#!/usr/bin/env bash

if [ $# -lt 1 ]
then
    echo "usage: $0 <FILE>"
    exit 1
fi

FILE=$1

if [ ! -f ".venv/bin/python" ]; then
    echo 'creating a virtualenv'
    virtualenv --no-site-packages .venv
fi

source .venv/bin/activate
pip install --quiet -r requirements.txt

echo "creating json file from ${FILE}"
python -m convert.to_json ${FILE}
echo 'done'
