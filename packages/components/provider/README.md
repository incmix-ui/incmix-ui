# @incmix-ui/provider

Standalone React provider for incmix-based custom component libraries.

## Warning

This package is provided for building custom component libraries, and does not
include any default theme or configurations. If you are not sure why you are
using it, please use `@incmix-ui/react` instead;

## Installation

```sh
yarn add @incmix-ui/provider

# or

npm i @incmix-ui/provider
```

## Usage

As the default theme and config is not included, you will need a theme object
following the [system-ui specification](https://system-ui.com/theme/), augmented
with the following configuration properties.

More details on incmixProvider's available props can be found
[here](https://incmix-ui.com/docs/getting-started#incmixprovider-props)

```
import * as React from "react"

// 1. import `incmixProvider` component
import { incmixProvider } from "@incmix-ui/provider"

// 2. build your theme and config
const theme = {
  // ... your system-ui theme
  config: {
    useSystemColorMode: false, // or true
    initialColorMode: "light", // or "dark"
    cssVarPrefix: "incmix", // any string
  }
}

// 3. Use at the root of your app
function App({ Component }) {
  return (
    <incmixProvider theme={theme}>
      <Component />
    </incmixProvider>
  )
}

```
