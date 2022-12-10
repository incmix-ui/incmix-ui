# @incmix-ui/checkbox

Checkbox component is used in forms when a user needs to select multiple values
from several options.

## Installation

```sh
yarn add @incmix-ui/checkbox

# or

npm i @incmix-ui/checkbox
```

## Import component

```jsx
import { Checkbox } from "@incmix-ui/checkbox"
```

## Usage

```jsx
<Checkbox>This is a checkbox</Checkbox>
```

### CheckboxGroup

CheckboxGroup is used to bind multiple checkboxes into a group, and it indicates
whether one or more options are selected.

```jsx
<CheckboxGroup defaultValue={["one", "two"]}>
  <Checkbox value="one">One</Checkbox>
  <Checkbox value="two">Two</Checkbox>
  <Checkbox value="three">Three</Checkbox>
</CheckboxGroup>
```

### Resources

- https://www.a11ymatters.com/pattern/checkbox/
- https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/
