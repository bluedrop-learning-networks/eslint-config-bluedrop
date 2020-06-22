#!/usr/bin/env bash

set -e
set -u
set -o pipefail

# These tests mostly check for invalid rules or syntax errors
npm run eslint -- -c config/babel.js config/babel.js "$@"
npm run eslint -- -c config/chai.js config/chai.js "$@"
npm run eslint -- -c config/common.js config/common.js "$@"
npm run eslint -- -c config/mocha.js config/mocha.js "$@"
npm run eslint -- -c config/node.js config/node.js "$@"

# react config will fail against its self, so test against any empty file
printf "" | npm run eslint -- --stdin -c config/react.js "$@"

npm run check-deprecated --deprecated config/babel.js
npm run check-deprecated --deprecated config/chai.js
npm run check-deprecated --deprecated config/console.js
npm run check-deprecated --deprecated config/mocha.js
npm run check-deprecated --deprecated config/react.js
