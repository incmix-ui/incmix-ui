import * as React from "react"
import { render, RenderOptions } from "@testing-library/react"
import { IncmixProvider, theme } from "@incmix-ui/react"

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <IncmixProvider theme={theme}>{children}</IncmixProvider>
)

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options })

export { customRender as render }
