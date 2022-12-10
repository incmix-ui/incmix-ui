import { cx } from "@incmix-ui/shared-utils"
import { HTMLincmixProps, incmix, forwardRef } from "@incmix-ui/system"
import { useStatStyles } from "./stat"

export interface StatNumberProps extends HTMLincmixProps<"dd"> {}

export const StatNumber = forwardRef<StatNumberProps, "dd">(function StatNumber(
  props,
  ref,
) {
  const styles = useStatStyles()
  return (
    <incmix.dd
      ref={ref}
      {...props}
      className={cx("incmix-stat__number", props.className)}
      __css={{
        ...styles.number,
        fontFeatureSettings: "pnum",
        fontVariantNumeric: "proportional-nums",
      }}
    />
  )
})

StatNumber.displayName = "StatNumber"
