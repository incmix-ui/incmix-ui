import __theme from "@incmix-ui/theme"
import { toCSSVar } from "@incmix-ui/styled-system"

export function createTheme(theme: any) {
  return toCSSVar({
    ...theme,
    breakpoints: __theme.breakpoints,
  })
}
