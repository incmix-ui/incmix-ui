import { HTMLincmixProps, incmix, forwardRef } from "@incmix-ui/system"
import { useMenuStyles } from "./menu"

export interface MenuCommandProps extends HTMLincmixProps<"span"> {}

export const MenuCommand = forwardRef<MenuCommandProps, "span">(
  (props, ref) => {
    const styles = useMenuStyles()
    return (
      <incmix.span
        ref={ref}
        {...props}
        __css={styles.command}
        className="incmix-menu__command"
      />
    )
  },
)

MenuCommand.displayName = "MenuCommand"
