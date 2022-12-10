import { incmix, forwardRef, HTMLIncmixProps } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

export interface LinkOverlayProps extends HTMLIncmixProps<"a"> {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean
}

export const LinkOverlay = forwardRef<LinkOverlayProps, "a">(
  function LinkOverlay(props, ref) {
    const { isExternal, target, rel, className, ...rest } = props
    return (
      <incmix.a
        {...rest}
        ref={ref}
        className={cx("incmix-linkbox__overlay", className)}
        rel={isExternal ? "noopener noreferrer" : rel}
        target={isExternal ? "_blank" : target}
        __css={{
          position: "static",
          "&::before": {
            content: "''",
            cursor: "inherit",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
          },
        }}
      />
    )
  },
)

export interface LinkBoxProps extends HTMLIncmixProps<"div"> {}

/**
 * `LinkBox` is used to wrap content areas within a link while ensuring semantic html
 *
 * @see Docs https://incmix-ui.com/docs/navigation/link-overlay
 * @see Resources https://www.sarasoueidan.com/blog/nested-links
 */
export const LinkBox = forwardRef<LinkBoxProps, "div">(function LinkBox(
  props,
  ref,
) {
  const { className, ...rest } = props

  return (
    <incmix.div
      ref={ref}
      position="relative"
      {...rest}
      className={cx("incmix-linkbox", className)}
      __css={{
        /* Elevate the links and abbreviations up */
        "a[href]:not(.incmix-linkbox__overlay), abbr[title]": {
          position: "relative",
          zIndex: 1,
        },
      }}
    />
  )
})
