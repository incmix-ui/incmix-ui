import * as React from "react"
import { IncmixProvider } from "@incmix-ui/react"
import theme from "./theme"

export const WrapRootElement = ({ element, resetCSS = true, portalZIndex }) => {
  return (
    <IncmixProvider
      theme={theme}
      resetCSS={resetCSS}
      portalZIndex={portalZIndex}
    >
      {element}
    </IncmixProvider>
  )
}
