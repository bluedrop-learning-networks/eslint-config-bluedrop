#!/usr/bin/env bash

set -e
set -u
set -o pipefail

# These tests mostly check for invalid rules or syntax errors
npm run eslint -- -c index.js index.js
npm run eslint -- -c jest.js jest.js
npm run eslint -- -c mocha.js mocha.js
npm run eslint -- -c node.js node.js
npm run eslint -- -c babel.js babel.js
npm run eslint -- -c ecmascript-7.js ecmascript-7.js
npm run eslint -- -c ecmascript-8.js ecmascript-8.js
# react config will fail against its self, so test against any empty file
echo "" | npm run eslint -- --stdin -c react.js
