import {
  incmix,
  forwardRef,
  omitThemingProps,
  SystemProps,
  ThemingProps,
  useStyleConfig,
  HTMLIncmixProps,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { compact } from "@incmix-ui/object-utils"

export interface TextProps extends HTMLIncmixProps<"p">, ThemingProps<"Text"> {
  /**
   * The CSS `text-align` property
   * @type SystemProps["textAlign"]
   */
  align?: SystemProps["textAlign"]
  /**
   * The CSS `text-decoration` property
   * @type SystemProps["textDecoration"]
   */
  decoration?: SystemProps["textDecoration"]
  /**
   * The CSS `text-transform` property
   * @type SystemProps["textTransform"]
   */
  casing?: SystemProps["textTransform"]
}

/**
 * Used to render texts or paragraphs.
 *
 * @see Docs https://incmix-ui.com/text
 */
export const Text = forwardRef<TextProps, "p">(function Text(props, ref) {
  const styles = useStyleConfig("Text", props)
  const { className, align, decoration, casing, ...rest } =
    omitThemingProps(props)

  const aliasedProps = compact({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing,
  })

  return (
    <incmix.p
      ref={ref}
      className={cx("incmix-text", props.className)}
      {...aliasedProps}
      {...rest}
      __css={styles}
    />
  )
})

Text.displayName = "Text"
