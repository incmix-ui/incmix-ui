import { incmix } from "@incmix-ui/system"
import * as React from "react"

export * from "./menu.stories"

export default {
  title: "Components / Overlay / Menu",
  decorators: [
    (story: Function) => (
      <incmix.div maxWidth="500px" mx="auto" mt="40px">
        {story()}
      </incmix.div>
    ),
  ],
}
