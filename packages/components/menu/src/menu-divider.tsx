import { HTMLincmixProps, incmix } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

import { useMenuStyles } from "./menu"

export interface MenuDividerProps extends HTMLincmixProps<"hr"> {}

export const MenuDivider: React.FC<MenuDividerProps> = (props) => {
  const { className, ...rest } = props
  const styles = useMenuStyles()
  return (
    <incmix.hr
      aria-orientation="horizontal"
      className={cx("incmix-menu__divider", className)}
      {...rest}
      __css={styles.divider}
    />
  )
}

MenuDivider.displayName = "MenuDivider"
