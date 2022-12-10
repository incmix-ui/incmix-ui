import { Styles } from "@incmix-ui/theme-tools"

export const styles: Styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "incmix-body-text",
      bg: "incmix-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: "incmix-placeholder-color",
    },
    "*, *::before, &::after": {
      borderColor: "incmix-border-color",
      wordWrap: "break-word",
    },
  },
}
