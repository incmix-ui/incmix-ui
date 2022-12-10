import {
  incmix,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLincmixProps,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

export interface ContainerProps
  extends HTMLincmixProps<"div">,
    ThemingProps<"Container"> {
  /**
   * If `true`, container will center its children
   * regardless of their width.
   */
  centerContent?: boolean
}

/**
 * Layout component used to wrap app or website content
 *
 * It sets `margin-left` and `margin-right` to `auto`,
 * to keep its content centered.
 *
 * It also sets a default max-width of `60ch` (60 characters).
 *
 * @see Docs https://incmix-ui.com/docs/components/container
 */
export const Container = forwardRef<ContainerProps, "div">(function Container(
  props,
  ref,
) {
  const { className, centerContent, ...rest } = omitThemingProps(props)

  const styles = useStyleConfig("Container", props)

  return (
    <incmix.div
      ref={ref}
      className={cx("incmix-container", className)}
      {...rest}
      __css={{
        ...styles,
        ...(centerContent && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }),
      }}
    />
  )
})

Container.displayName = "Container"
