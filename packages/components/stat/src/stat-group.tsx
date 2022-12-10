import { cx } from "@incmix-ui/shared-utils"
import { HTMLincmixProps, incmix, forwardRef } from "@incmix-ui/system"

export interface StatGroupProps extends HTMLincmixProps<"div"> {}

export const StatGroup = forwardRef<StatGroupProps, "div">(function StatGroup(
  props,
  ref,
) {
  return (
    <incmix.div
      {...props}
      ref={ref}
      role="group"
      className={cx("incmix-stat__group", props.className)}
      __css={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}
    />
  )
})

StatGroup.displayName = "StatGroup"
