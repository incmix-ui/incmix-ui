import { extendTheme, type ThemeConfig } from "@incmix-ui/react"

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
}

const theme = extendTheme({ config })

export default theme
