#!/usr/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

cd "${SCRIPT_DIR}"
export JEKYLL_ENV=development
bundle exec jekyll serve --config=_config_dev.yml
