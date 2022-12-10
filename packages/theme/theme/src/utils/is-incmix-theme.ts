import { isObject } from "@incmix-ui/shared-utils"
import type { incmixTheme } from "../theme.types"

export const requiredincmixThemeKeys: (keyof incmixTheme)[] = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices",
]

export function isincmixTheme(unit: unknown): unit is incmixTheme {
  if (!isObject(unit)) {
    return false
  }

  return requiredincmixThemeKeys.every((propertyName) =>
    Object.prototype.hasOwnProperty.call(unit, propertyName),
  )
}
