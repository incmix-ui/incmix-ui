# Tooltip

Use this component to display extra information about an element by displaying a
floating description.

## Installation

```sh
yarn add @incmix-ui/tooltip

# or

npm i @incmix-ui/tooltip
```

## Import components

```js
import { Tooltip } from "@incmix-ui/react"
```

## Usage

If the `children` of Tooltip is a string, it will be wrapped with a focusable
`span` element to ensure the Tooltip meets accessibility requirements.

```jsx
<Tooltip label="Hey, I'm here!">Hover me</Tooltip>
```
