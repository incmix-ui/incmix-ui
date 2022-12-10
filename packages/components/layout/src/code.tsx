import {
  incmix,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLincmixProps,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

export interface CodeProps
  extends HTMLincmixProps<"code">,
    ThemingProps<"Code"> {}

/**
 * React component to render inline code snippets.
 *
 * @see Docs https://incmix-ui.com/code
 */
export const Code = forwardRef<CodeProps, "code">(function Code(props, ref) {
  const styles = useStyleConfig("Code", props)
  const { className, ...rest } = omitThemingProps(props)

  return (
    <incmix.code
      ref={ref}
      className={cx("incmix-code", props.className)}
      {...rest}
      __css={{
        display: "inline-block",
        ...styles,
      }}
    />
  )
})

Code.displayName = "Code"
