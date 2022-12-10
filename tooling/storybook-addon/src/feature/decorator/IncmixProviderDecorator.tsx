import { useMemo } from "react"
import { StoryContext, StoryFn } from "@storybook/addons"
import { IncmixProvider, extendTheme, theme } from "@incmix-ui/react"
import { ColorModeSync } from "../color-mode/ColorModeSync"
import { useDirection } from "../direction/useDirection"
import { DIRECTION_TOOL_ID } from "../../constants"

export function IncmixProviderDecorator(
  Story: StoryFn<any>,
  context: StoryContext,
) {
  const {
    parameters: { Incmix: IncmixParams },
    globals: { [DIRECTION_TOOL_ID]: globalDirection },
  } = context
  const IncmixTheme = IncmixParams?.theme
    ? typeof IncmixParams.theme === "function"
      ? IncmixParams.theme(context)
      : IncmixParams.theme
    : theme
  const direction = useDirection(globalDirection || IncmixTheme?.direction)
  const themeWithDirectionOverride = useMemo(
    () => extendTheme({ direction }, IncmixTheme),
    [IncmixTheme, direction],
  )

  return (
    <IncmixProvider {...IncmixParams} theme={themeWithDirectionOverride}>
      <ColorModeSync />
      <Story {...context} />
    </IncmixProvider>
  )
}
