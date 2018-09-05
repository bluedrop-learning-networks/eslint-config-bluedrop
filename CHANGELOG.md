# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [5.0.0] - 2018-09-05
### Added
- ECMAScript-9 configuration
- Specifies React 16 as the default React version
- New rules since last major release
- Typescript support
- Console application configuration

## [4.0.0] - 2018-04-12
### Added
- ChaiJS support
- Node plugin support
- New rules since last major release
### Changed
- Disabled `promise/no-native`
- `no-unused-expressions` now errors on ternary and short circuit cases
- Disabled `filenames/match-regex` and `security/detect-non-literal-fs-filename` in mocha config
### Removed
- Deprecated rules

## [3.3.0] - 2017-12-13
### Changed
- Disabled `require-await`

## [3.2.0] - 2017-12-12
### Added
- Support for ECMAScript 7 & 8

## [3.1.0] - 2017-09-14
### Changed
- Don't enforce valid JSDoc comments (disabled `valid-jsdoc`)
- Apply the same filename rules to Jest as we do React

## [3.0.0] - 2017-05-18
### Added
- React/JSX support
- Jest support
- Promise support
- Filename support
- Security support
- Babel support
### Changed
- Added better mocha support
### Removed
- Custom plugins

## [2.0.0] - 2016-08-09
### Added
- Added `max-len` rule
- Added `max: 1`, `maxEOF: 0` and `maxBOF: 0` to `no-multiple-empty-lines`
### Changed
- Allow `allowShortCircuit` and `allowTernary` for `no-unused-expressions`

## 1.1.0 - 2016-06-17
### Changed
- Turned arrow-body-style to off
- Bumped newline-per-chained-call chain depth to 4

## 1.0.0 - 2016-06-16
### Added
- Initial rule set

[Unreleased]: https://github.com/CoursePark/eslint-config-bluedrop/compare/v4.0.0...HEAD
[4.0.0]: https://github.com/CoursePark/eslint-config-bluedrop/compare/v3.3.0...v4.0.0
[3.3.0]: https://github.com/CoursePark/eslint-config-bluedrop/compare/v3.2.0...v3.3.0
[3.2.0]: https://github.com/CoursePark/eslint-config-bluedrop/compare/v3.1.0...v3.2.0
[3.1.0]: https://github.com/CoursePark/eslint-config-bluedrop/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/CoursePark/eslint-config-bluedrop/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/CoursePark/eslint-config-bluedrop/compare/v1.0.0...v2.0.0
