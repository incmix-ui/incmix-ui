# @incmix-ui/image

The Image component is used to display images.

## Installation

```sh
yarn add @incmix-ui/image
```

## Import component

```jsx
import { Image } from "@incmix-ui/image"
```

## Basic Usage

```jsx
import React from "react"
import { Image } from "@incmix-ui/image"

const Example = () => (
  <Image
    src="photo.png"
    fallbackSrc="placeholdit.com/200x200"
    alt="A Placeholder Image"
  />
)
```

## Fallback support

You can provide a fallback image for when there is an error loading the `src` of
the image. You can also opt out of this behavior by passing the `ignoreFallback`
prop.

```jsx
<Image
  src="photo.png"
  fallbackSrc="placeholdit.com/200x200"
  alt="A Placeholder Image"
/>
```
