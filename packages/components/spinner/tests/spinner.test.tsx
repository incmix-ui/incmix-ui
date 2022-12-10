import * as React from "react"
import { render, testA11y } from "@incmix-ui/test-utils"
import { Spinner } from "../src"

test("Spinner renders correctly", async () => {
  const { container } = render(<Spinner />)
  await testA11y(container)
})
