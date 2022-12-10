# @incmix-ui/editable

EditableText is used for inline renaming of some text. It appears as normal UI
text but transforms into a text input field when the user clicks or focuses on
it.

## Installation

```sh
yarn add @incmix-ui/editable

# or

npm i @incmix-ui/editable
```

## Import component

```js
import { Editable, EditableInput, EditablePreview } from "@incmix-ui/react"
```

## Usage

```jsx
<Editable defaultValue="Take some incmix">
  <EditablePreview />
  <EditableInput />
</Editable>
```
