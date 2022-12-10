import * as React from "react"
import { ChakraProvider } from "@incmix-ui/react"
import theme from "./theme"

export const WrapRootElement = ({ element, resetCSS = true, portalZIndex }) => {
  return (
    <ChakraProvider
      theme={theme}
      resetCSS={resetCSS}
      portalZIndex={portalZIndex}
    >
      {element}
    </ChakraProvider>
  )
}
