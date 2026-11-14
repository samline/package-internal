# Changelog

All notable changes to this package. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions follow [semver](https://semver.org/).

## Unreleased

### Added

- First public release (1.0.0). The helpers were private inside the `samline/utils` monorepo and aliased by source path; they now ship as ESM, CommonJS and declarations so standalone @samline repositories can bundle them (`noExternal`).
- `isBrowser`, `noop`, `resolveElements`, `readBoolean`, `readEnum`, `readNumber`, `readNumberPair`, `readString`, `REDUCED_MOTION_QUERY`, `prefersReducedMotion`, `onReducedMotionChange` and `autoInit`.
