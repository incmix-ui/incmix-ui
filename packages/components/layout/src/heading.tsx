import {
  incmix,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLIncmixProps,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

export interface HeadingProps
  extends HTMLIncmixProps<"h2">,
    ThemingProps<"Heading"> {}

/**
 * `Heading` is used to render semantic HTML heading elements.
 *
 * By default, renders as `h2` with themantic size `xl`
 *
 * @see Docs https://incmix-ui.com/docs/components/heading
 */
export const Heading = forwardRef<HeadingProps, "h2">(function Heading(
  props,
  ref,
) {
  const styles = useStyleConfig("Heading", props)
  const { className, ...rest } = omitThemingProps(props)

  return (
    <incmix.h2
      ref={ref}
      className={cx("incmix-heading", props.className)}
      {...rest}
      __css={styles}
    />
  )
})

Heading.displayName = "Heading"
