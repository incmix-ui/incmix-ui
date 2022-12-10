import { Spinner } from "@incmix-ui/spinner"
import { incmix, HTMLincmixProps, SystemStyleObject } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { useMemo } from "react"
import { ButtonSpinnerOptions } from "./button-types"

interface ButtonSpinnerProps
  extends HTMLincmixProps<"div">,
    ButtonSpinnerOptions {}

export function ButtonSpinner(props: ButtonSpinnerProps) {
  const {
    label,
    placement,
    spacing = "0.5rem",
    children = <Spinner color="currentColor" width="1em" height="1em" />,
    className,
    __css,
    ...rest
  } = props

  const _className = cx("incmix-button__spinner", className)

  const marginProp = placement === "start" ? "marginEnd" : "marginStart"

  const spinnerStyles: SystemStyleObject = useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute",
      [marginProp]: label ? spacing : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...__css,
    }),
    [__css, label, marginProp, spacing],
  )

  return (
    <incmix.div className={_className} {...rest} __css={spinnerStyles}>
      {children}
    </incmix.div>
  )
}
ButtonSpinner.displayName = "ButtonSpinner"
