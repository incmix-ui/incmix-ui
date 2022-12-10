import { createContext } from "@incmix-ui/react-context"
import { ThemingProps } from "@incmix-ui/system"

export interface ButtonGroupContext extends ThemingProps<"Button"> {
  isDisabled?: boolean
}

export const [ButtonGroupProvider, useButtonGroup] =
  createContext<ButtonGroupContext>({
    strict: false,
    name: "ButtonGroupContext",
  })
