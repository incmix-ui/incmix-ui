import {
  incmix,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLincmixProps,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

export interface KbdProps extends HTMLincmixProps<"kbd">, ThemingProps<"Kbd"> {}

/**
 * Semantic component to render a keyboard shortcut
 * within an application.
 *
 * @example
 *
 * ```jsx
 * <Kbd>⌘ + T</Kbd>
 * ```
 *
 * @see Docs https://incmix-ui.com/kbd
 */
export const Kbd = forwardRef<KbdProps, "kbd">(function Kbd(props, ref) {
  const styles = useStyleConfig("Kbd", props)
  const { className, ...rest } = omitThemingProps(props)

  return (
    <incmix.kbd
      ref={ref}
      className={cx("incmix-kbd", className)}
      {...rest}
      __css={{
        fontFamily: "mono",
        ...styles,
      }}
    />
  )
})

Kbd.displayName = "Kbd"
