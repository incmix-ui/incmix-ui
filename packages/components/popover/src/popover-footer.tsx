import { incmix, HTMLincmixProps } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { usePopoverStyles } from "./popover-context"

export interface PopoverFooterProps extends HTMLincmixProps<"footer"> {}

export function PopoverFooter(props: PopoverFooterProps) {
  const styles = usePopoverStyles()
  return (
    <incmix.footer
      {...props}
      className={cx("incmix-popover__footer", props.className)}
      __css={styles.footer}
    />
  )
}

PopoverFooter.displayName = "PopoverFooter"
