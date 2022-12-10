import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { usePopoverContext, usePopoverStyles } from "./popover-context"

export interface PopoverHeaderProps extends HTMLincmixProps<"header"> {}
/**
 * PopoverHeader is the accessible header or label
 * for the popover's content, and it is first announced by screenreaders.
 */

export const PopoverHeader = forwardRef<PopoverHeaderProps, "header">(
  function PopoverHeader(props, ref) {
    const { getHeaderProps } = usePopoverContext()

    const styles = usePopoverStyles()

    return (
      <incmix.header
        {...getHeaderProps(props, ref)}
        className={cx("incmix-popover__header", props.className)}
        __css={styles.header}
      />
    )
  },
)

PopoverHeader.displayName = "PopoverHeader"
