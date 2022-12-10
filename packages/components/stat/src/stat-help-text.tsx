import { cx } from "@incmix-ui/shared-utils"
import { HTMLincmixProps, incmix, forwardRef } from "@incmix-ui/system"
import { useStatStyles } from "./stat"

export interface StatHelpTextProps extends HTMLincmixProps<"dd"> {}

export const StatHelpText = forwardRef<StatHelpTextProps, "dd">(
  function StatHelpText(props, ref) {
    const styles = useStatStyles()

    return (
      <incmix.dd
        ref={ref}
        {...props}
        className={cx("incmix-stat__help-text", props.className)}
        __css={styles.helpText}
      />
    )
  },
)

StatHelpText.displayName = "StatHelpText"
