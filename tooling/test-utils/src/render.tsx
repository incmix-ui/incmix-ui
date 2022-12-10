import { IncmixProvider } from "@incmix-ui/provider"
import theme from "@incmix-ui/theme"
import "@testing-library/jest-dom/extend-expect"
import { render as rtlRender, RenderOptions } from "@testing-library/react"
import { toHaveNoViolations } from "jest-axe"
import * as React from "react"
import userEvent from "@testing-library/user-event"

expect.extend(toHaveNoViolations)

const IncmixProviderWrapper = (props: any) => (
  <IncmixProvider {...props} theme={theme} />
)

export interface IncmixRenderOptions extends RenderOptions {
  withIncmixProvider?: boolean
}

export function render(
  ui: React.ReactElement,
  { withIncmixProvider, ...options }: IncmixRenderOptions = {
    withIncmixProvider: true,
  },
): ReturnType<typeof rtlRender> & { user: ReturnType<typeof userEvent.setup> } {
  const user = userEvent.setup()

  if (withIncmixProvider) {
    options.wrapper = IncmixProviderWrapper
  }

  const result = rtlRender(ui, options)

  return { user, ...result }
}
