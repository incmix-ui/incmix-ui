import { HTMLincmixProps, incmix } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

import { Children, cloneElement, isValidElement } from "react"

export const MenuIcon: React.FC<HTMLincmixProps<"span">> = (props) => {
  const { className, children, ...rest } = props

  const child = Children.only(children)

  const clone = isValidElement(child)
    ? cloneElement(child, {
        focusable: "false",
        "aria-hidden": true,
        className: cx("incmix-menu__icon", child.props.className),
      })
    : null

  const _className = cx("incmix-menu__icon-wrapper", className)

  return (
    <incmix.span
      className={_className}
      {...rest}
      __css={{
        flexShrink: 0,
      }}
    >
      {clone}
    </incmix.span>
  )
}

MenuIcon.displayName = "MenuIcon"
