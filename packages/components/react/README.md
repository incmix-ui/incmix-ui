# Welcome to incmix UI ⚡️

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

- Works out of the box. incmix UI contains a set of polished React components
  that work out of the box.

- Flexible & composable. incmix UI components are built on top of a React UI
  Primitive for endless composability.

- Accessible. incmix UI components follows the WAI-ARIA guidelines
  specifications.

- Dark Mode 😍: All components are dark mode compatible.

## Looking for the documentation?

https://incmix-ui.com

## Installing incmix UI

⚡️incmix UI is made up of multiple components and tools which you can import
one by one. All you need to do is install the `@incmix-ui/react` package:

```sh
$ yarn add @incmix-ui/react
# or
$ npm install --save @incmix-ui/react
```

# Getting set up

To start using the components, please follow these steps:

1. Wrap your application in a `ThemeProvider` provided by **@incmix-ui/react**

```jsx
import { ThemeProvider, ColorModeProvider } from "@incmix-ui/react"

const App = ({ children }) => (
  <ThemeProvider>
    <ColorModeProvider>{children}</ColorModeProvider>
  </ThemeProvider>
)
```

`ColorModeProvider` is a context that provides light mode and dark mode values
to the components. It also comes with a function to toggle between light/dark
mode.

2. Now you can start using components like so!:

```jsx
import { Button } from "@incmix-ui/react"

const App = () => <Button>I just consumed some ⚡️incmix!</Button>
```

# Contributing

Feel like contributing? That's awesome! We have a
[contributing guide](../../CONTRIBUTING.md) to help guide you.

The components to be built come from the
[Aria Practices Design Patterns and Widgets](https://www.w3.org/TR/wai-aria-practices-1.1).

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td style="text-align: center"><a href="https://github.com/segunadebayo"><img src="https://avatars2.githubusercontent.com/u/6916170?v=4" width="100px;" alt="Segun Adebayo"/><br /><sub><b>Segun Adebayo</b></sub></a><br /><a href="https://github.com/incmix-ui/incmix-ui/commits?author=segunadebayo" title="Code">💻</a> <a href="#maintenance-segunadebayo" title="Maintenance">🚧</a> <a href="https://github.com/incmix-ui/incmix-ui/commits?author=segunadebayo" title="Documentation">📖</a> <a href="#example-segunadebayo" title="Examples">💡</a> <a href="#design-segunadebayo" title="Design">🎨</a></td>
    <td style="text-align: center"><a href="https://github.com/tioluwani94"><img src="https://avatars1.githubusercontent.com/u/11310046?v=4" width="100px;" alt="Tioluwani Kolawole"/><br /><sub><b>Tioluwani Kolawole</b></sub></a><br /><a href="https://github.com/incmix-ui/incmix-ui/commits?author=tioluwani94" title="Documentation">📖</a> <a href="#example-tioluwani94" title="Examples">💡</a> <a href="#maintenance-tioluwani94" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
