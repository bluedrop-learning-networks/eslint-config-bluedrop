#!/usr/bin/env bash

set -e
set -u
set -o pipefail

# These tests mostly check for invalid rules or syntax errors
npm run eslint -- -c scripts/all-combined.js config/babel.js "$@"
npm run eslint -- -c scripts/all-combined.js config/chai.js "$@"
npm run eslint -- -c scripts/all-combined.js config/common.js "$@"
npm run eslint -- -c scripts/all-combined.js config/mocha.js "$@"
npm run eslint -- -c scripts/all-combined.js config/node.js "$@"
npm run eslint -- -c scripts/all-combined.js config/react.js "$@"

npm run check-deprecated config/babel.js
npm run check-deprecated config/chai.js
npm run check-deprecated config/console.js
npm run check-deprecated config/mocha.js
npm run check-deprecated config/react.js
