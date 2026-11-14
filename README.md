# @samline/internal

Shared DOM helpers bundled into @samline packages at build time: auto-init, `data-*` attribute readers, element targets and reduced-motion detection.

This is a building block for maintainers of @samline packages, not an end-user API. Consumers never install it: each package lists it as a devDependency and inlines it (`noExternal`), so published packages stay dependency-free. Semver still applies, so a package can upgrade on its own schedule.

## Table of contents

- [Installation](#installation)
- [API at a glance](#api-at-a-glance)
- [Changelog](#changelog)
- [License](#license)

## Installation

```sh
bun add -d @samline/internal
```

In `tsup.config.ts`, bundle it and inline its types:

```ts
const noExternal = [/^@samline\//]

export default defineConfig({
  // ...
  noExternal,
  dts: { resolve: noExternal },
})
```

## API at a glance

| Export                                                                  | Purpose                                                                                   |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `isBrowser`, `noop`                                                     | Guard DOM work so calls are no-ops without a DOM.                                         |
| `resolveElements(target, root?)`                                        | Element, selector, `NodeList` or array to an element array. `ElementTarget` is its type.  |
| `readBoolean`, `readEnum`, `readNumber`, `readNumberPair`, `readString` | Typed `data-*` readers; attributes win over options.                                      |
| `REDUCED_MOTION_QUERY`, `prefersReducedMotion`, `onReducedMotionChange` | `prefers-reduced-motion` state and changes.                                               |
| `autoInit(options)`                                                     | Start every matching element, including ones added later; returns `{ refresh, destroy }`. |

## Changelog

Read [CHANGELOG.md](CHANGELOG.md).

## License

MIT. See [LICENSE.md](LICENSE.md).
