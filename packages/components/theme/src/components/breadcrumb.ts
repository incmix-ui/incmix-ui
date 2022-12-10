import { breadcrumbAnatomy as parts } from "@incmix-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@incmix-ui/styled-system"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyleLink = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline",
  },
  _focusVisible: {
    boxShadow: "outline",
  },
})

const baseStyle = definePartsStyle({
  link: baseStyleLink,
})

export const breadcrumbTheme = defineMultiStyleConfig({
  baseStyle,
})
