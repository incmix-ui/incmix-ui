# Counter

A React hook that provides simple and advance counter functionalities. Mostly
used to create numeric inputs and countdown timers.

## Installation

```sh
yarn add @incmix-ui/counter

# or

npm i @incmix-ui/counter
```

## Import hook

```js
import { useCounter } from "@incmix-ui/counter"
```

## Basic usage

```jsx
export function Example() {
  const counter = useCounter({
    max: 10,
    min: 0,
    step: 0.1,
  })

  return (
    <div>
      <button onClick={() => counter.increment()}>Increment</button>
      <p>{counter.value}</p>
      <button onClick={() => counter.decrement()}>Decrement</button>
    </div>
  )
}
```
