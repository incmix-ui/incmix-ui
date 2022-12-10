import {
  incmix,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLIncmixProps,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

export interface BadgeProps
  extends HTMLIncmixProps<"span">,
    ThemingProps<"Badge"> {}

/**
 * React component used to display notifications, messages, or
 * statuses in different shapes and sizes.
 *
 * @see Docs https://incmix-ui.com/badge
 */
export const Badge = forwardRef<BadgeProps, "span">(function Badge(props, ref) {
  const styles = useStyleConfig("Badge", props)
  const { className, ...rest } = omitThemingProps(props)

  return (
    <incmix.span
      ref={ref}
      className={cx("incmix-badge", props.className)}
      {...rest}
      __css={{
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        ...styles,
      }}
    />
  )
})

Badge.displayName = "Badge"
