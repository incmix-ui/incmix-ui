import { incmix, HTMLincmixProps } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { usePopoverContext, usePopoverStyles } from "./popover-context"

export interface PopoverArrowProps extends HTMLincmixProps<"div"> {}

export function PopoverArrow(props: PopoverArrowProps) {
  const { bg, bgColor, backgroundColor } = props
  const { getArrowProps, getArrowInnerProps } = usePopoverContext()
  const styles = usePopoverStyles()
  const arrowBg = bg ?? bgColor ?? backgroundColor
  return (
    <incmix.div
      {...getArrowProps()}
      className="incmix-popover__arrow-positioner"
    >
      <incmix.div
        className={cx("incmix-popover__arrow", props.className)}
        {...getArrowInnerProps(props)}
        __css={{
          ...styles.arrow,
          "--popper-arrow-bg": arrowBg
            ? `colors.${arrowBg}, ${arrowBg}`
            : undefined,
        }}
      />
    </incmix.div>
  )
}

PopoverArrow.displayName = "PopoverArrow"
