import {
  incmix,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLIncmixProps,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

export interface LinkProps extends HTMLIncmixProps<"a">, ThemingProps<"Link"> {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean
}

/**
 * Links are accessible elements used primarily for navigation.
 *
 * It integrates well with other routing libraries like
 * React Router, Reach Router and Next.js Link.
 *
 * @example
 *
 * ```jsx
 * <Link as={ReactRouterLink} to="/home">Home</Link>
 * ```
 *
 * @see Docs https://incmix-ui.com/link
 */
export const Link = forwardRef<LinkProps, "a">(function Link(props, ref) {
  const styles = useStyleConfig("Link", props)
  const { className, isExternal, ...rest } = omitThemingProps(props)

  return (
    <incmix.a
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener" : undefined}
      ref={ref}
      className={cx("incmix-link", className)}
      {...rest}
      __css={styles}
    />
  )
})

Link.displayName = "Link"
