---
author: Mark Chandler
---

# Versioning Strategy

Since `@incmix-ui/react` acts as a combined gateway to (nearly) all Incmix UI
functionality, its version should reflect that by having all `minor` version
bumps to its internal dependencies applied to itself as well. This allows the
`@incmix-ui/react` package to reflect all backwards-compatible functionality
changes for the _system as a whole_.

We've currently configured https://github.com/atlassian/changesets to bump
internal dependency changes using `patch` which is _probably_ the more correct
thing to do in that situation since the _technically correct_ thing would result
in constant `major` version bumps, but in the case of `@incmix-ui/react`, we
want to instead receive any `minor` version bumps.

# Examples

In my mind, here's how versioning should look (assume all packages starting at
`1.0.0`):

1. Internal dependency adds backwards-compatible functionality

- `@incmix-ui/hooks` adds a new `useCoolThing` export
  - `@incmix-ui/hooks@1.0.0` -> `@incmix-ui/hooks@1.1.0` (`minor`)
- `@incmix-ui/react@1.0.0` -> `@incmix-ui/react@1.1.0` (`minor`) to reflect the
  added _system-level_ functionality

2. Multiple internal dependencies add backwards-compatible functionality

- `@incmix-ui/hooks` adds a new `useCoolThing` export
  - `@incmix-ui/hooks@1.0.0` -> `@incmix-ui/hooks@1.1.0` (`minor`)
- `@incmix-ui/accordion` adds a new `AccordionCoolestItem` export
  - `@incmix-ui/accordion@1.0.0` -> `@incmix-ui/accordion@1.1.0` (`minor`)
- `@incmix-ui/react@1.0.0` -> `@incmix-ui/react@1.1.0` (`minor`) to reflect the
  added _system-level_ functionality

3. Internal dependency adds bug fix

- `@incmix-ui/hooks` fixes a bug with `useCoolThing`
  - `@incmix-ui/hooks@1.0.0` -> `@incmix-ui/hooks@1.0.1` (`patch`)
- `@incmix-ui/react@1.0.0` -> `@incmix-ui/react@1.0.1` (`patch`) to reflect the
  _system-level_ bug fix

4. Multiple internal dependencies add bug fixes

- `@incmix-ui/hooks` fixes a bug with `useCoolThing`
  - `@incmix-ui/hooks@1.0.0` -> `@incmix-ui/hooks@1.0.1` (`patch`)
- `@incmix-ui/accordion` fixes a bug with `useAccordionItem`
  - `@incmix-ui/accordion@1.0.0` -> `@incmix-ui/accordion@1.0.1` (`patch`)
- `@incmix-ui/react@1.0.0` -> `@incmix-ui/react@1.0.1` (`patch`) to reflect the
  _system-level_ bug fixes

5. Internal dependencies add backwards-compatible functionality **and** bug
   fixes

- `@incmix-ui/hooks` fixes a bug with `useCoolThing`
  - `@incmix-ui/hooks@1.0.0` -> `@incmix-ui/hooks@1.0.1` (`patch`)
- `@incmix-ui/accordion` adds a new `AccordionCoolestItem` export
  - `@incmix-ui/accordion@1.0.0` -> `@incmix-ui/accordion@1.1.0` (`minor`)
- `@incmix-ui/react@1.0.0` -> `@incmix-ui/react@1.1.1` (`minor` and `patch`) to
  reflect **maximum** version bump of all _system-level_ changes (I believe this
  is the automatic `changesets` behavior, but I need to test that; see
  https://github.com/atlassian/changesets/blob/master/docs/decisions.md#how-changesets-are-combined
  for more info)

6. New package is published

- `@incmix-ui/new-component` is created
  - `@incmix-ui/new-component@1.0.0` to reflect start of new package
- `@incmix-ui/react@1.0.0` -> `@incmix-ui/react@1.1.0` (`minor`) to reflect the
  added _system-level_ functionality

# How?

I think we have two possible solutions:

- Include `@incmix-ui/react` in all changeset files matching the version bump of
  the dependent package. This requires manual effort, but allows us to fully
  control the process.
- Build our own customized release plan. I'm not sure `changesets` supports this
  yet and need to investigate, but it would allow us to automate this so we
  don't have to always include `@incmix-ui/react` bumps in our changeset files.
