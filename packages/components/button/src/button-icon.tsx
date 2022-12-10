import { incmix, HTMLIncmixProps } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { cloneElement, isValidElement } from "react"

export function ButtonIcon(props: HTMLIncmixProps<"span">) {
  const { children, className, ...rest } = props

  const _children = isValidElement(children)
    ? cloneElement(children, {
        "aria-hidden": true,
        focusable: false,
      })
    : children

  const _className = cx("incmix-button__icon", className)

  return (
    <incmix.span
      display="inline-flex"
      alignSelf="center"
      flexShrink={0}
      {...rest}
      className={_className}
    >
      {_children}
    </incmix.span>
  )
}

ButtonIcon.displayName = "ButtonIcon"
