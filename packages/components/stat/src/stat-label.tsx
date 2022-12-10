import { cx } from "@incmix-ui/shared-utils"
import { HTMLincmixProps, incmix, forwardRef } from "@incmix-ui/system"
import { useStatStyles } from "./stat"

export interface StatLabelProps extends HTMLincmixProps<"dt"> {}

export const StatLabel = forwardRef<StatLabelProps, "dt">(function StatLabel(
  props,
  ref,
) {
  const styles = useStatStyles()
  return (
    <incmix.dt
      ref={ref}
      {...props}
      className={cx("incmix-stat__label", props.className)}
      __css={styles.label}
    />
  )
})

StatLabel.displayName = "StatLabel"
