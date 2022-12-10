import {
  incmix,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLincmixProps,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

/**
 * Layout component used to visually separate content in a list or group.
 * It displays a thin horizontal or vertical line, and renders a `hr` tag.
 *
 * @see Docs https://incmix-ui.com/divider
 */
export const Divider = forwardRef<DividerProps, "hr">(function Divider(
  props,
  ref,
) {
  const {
    borderLeftWidth,
    borderBottomWidth,
    borderTopWidth,
    borderRightWidth,
    borderWidth,
    borderStyle,
    borderColor,
    ...styles
  } = useStyleConfig("Divider", props)
  const {
    className,
    orientation = "horizontal",
    __css,
    ...rest
  } = omitThemingProps(props)

  const dividerStyles = {
    vertical: {
      borderLeftWidth:
        borderLeftWidth || borderRightWidth || borderWidth || "1px",
      height: "100%",
    },
    horizontal: {
      borderBottomWidth:
        borderBottomWidth || borderTopWidth || borderWidth || "1px",
      width: "100%",
    },
  }

  return (
    <incmix.hr
      ref={ref}
      aria-orientation={orientation}
      {...rest}
      __css={{
        ...styles,
        border: "0",

        borderColor,
        borderStyle,
        ...dividerStyles[orientation],
        ...__css,
      }}
      className={cx("incmix-divider", className)}
    />
  )
})

export interface DividerProps
  extends HTMLincmixProps<"div">,
    ThemingProps<"Divider"> {
  orientation?: "horizontal" | "vertical"
}

Divider.displayName = "Divider"
