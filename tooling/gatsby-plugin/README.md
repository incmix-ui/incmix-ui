# @incmix-ui/gatsby-plugin

Gatsby plugin for adding Chakra UI

## Installation

⚡ To use Chakra UI in your Gatsby site, you need to install the plugin and its
peer dependencies.

```sh
npm i @incmix-ui/gatsby-plugin @incmix-ui/react @emotion/react @emotion/styled framer-motion

# or

yarn add @incmix-ui/gatsby-plugin @incmix-ui/react @emotion/react @emotion/styled framer-motion
```

## Usage

1. Add `@incmix-ui/gatsby-plugin` as a plugin in your Gatsby config.

```js
// gatsby-config.js
module.exports = {
  plugins: ["@incmix-ui/gatsby-plugin"],
}
```

2. Use Chakra ⚡

```jsx
// src/pages/index.js
import React from "react"
import { Box, Text } from "@incmix-ui/react"

function IndexPage() {
  return (
    <Box p={8}>
      <Text fontSize="xl">Hello World</Text>
    </Box>
  )
}

export default IndexPage
```

## Plugin options

By default, this plugin adds the main context provider to make all components
work correctly.

- **ChakraProvider:** Your custom theme and all
  [ChakraProvider Props](https://chakra-ui.com/docs/getting-started#chakraprovider-props)
  are passed to this instance

```jsx
<ChakraProvider theme={theme} resetCSS={resetCSS} portalZIndex={portalZIndex}>
  {element}
</ChakraProvider>
```

You can disable either of these with Gatsby options:

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "@incmix-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if `false`, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {number} [portalZIndex=40]
         * The z-index to apply to all portal nodes. This is useful
         * if your app uses a lot z-index to position elements.
         */
        portalZIndex: 40,
      },
    },
  ],
}
```

## Customizing the theme

To use customize the theme in your Gatsby site, you can shadow the plugin's
`src/@incmix-ui/gatsby-plugin/theme.js` file with your own theme:

```js
// src/@incmix-ui/gatsby-plugin/theme.js
import { extendTheme } from "@incmix-ui/react"
const theme = {
  colors: {
    primary: "rebeccapurple",
  },
}

export default extendTheme(theme)
```

You can learn more about custom theme at
[Chakra UI's documentation](https://chakra-ui.com/theme).

By default, Chakra provides a sensible
[default theme](https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme)
inspired by Tailwind CSS.
