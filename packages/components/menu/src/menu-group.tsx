import { HTMLincmixProps, incmix, forwardRef } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

import { useMenuStyles } from "./menu"

export interface MenuGroupProps extends HTMLincmixProps<"div"> {}

export const MenuGroup = forwardRef<MenuGroupProps, "div">((props, ref) => {
  const { title, children, className, ...rest } = props

  const _className = cx("incmix-menu__group__title", className)
  const styles = useMenuStyles()

  return (
    <div ref={ref} className="incmix-menu__group" role="group">
      {title && (
        <incmix.p className={_className} {...rest} __css={styles.groupTitle}>
          {title}
        </incmix.p>
      )}
      {children}
    </div>
  )
})

MenuGroup.displayName = "MenuGroup"
