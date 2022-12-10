import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { usePopoverContext, usePopoverStyles } from "./popover-context"

export interface PopoverBodyProps extends HTMLincmixProps<"div"> {}
/**
 * PopoverBody is the main content area for the popover. Should contain
 * at least one interactive element.
 */

export const PopoverBody = forwardRef<PopoverBodyProps, "div">(
  function PopoverBody(props, ref) {
    const { getBodyProps } = usePopoverContext()

    const styles = usePopoverStyles()

    return (
      <incmix.div
        {...getBodyProps(props, ref)}
        className={cx("incmix-popover__body", props.className)}
        __css={styles.body}
      />
    )
  },
)

PopoverBody.displayName = "PopoverBody"
