import { useCheckbox, UseCheckboxProps } from "@incmix-ui/checkbox"
import {
  incmix,
  forwardRef,
  omitThemingProps,
  SystemStyleObject,
  ThemingProps,
  useMultiStyleConfig,
  HTMLincmixProps,
  SystemProps,
} from "@incmix-ui/system"
import { cx, dataAttr } from "@incmix-ui/shared-utils"
import { useMemo } from "react"

export interface SwitchProps
  extends Omit<UseCheckboxProps, "isIndeterminate">,
    Omit<HTMLincmixProps<"label">, keyof UseCheckboxProps>,
    ThemingProps<"Switch"> {
  /**
   * The spacing between the switch and its label text
   * @default 0.5rem
   * @type SystemProps["marginLeft"]
   */
  spacing?: SystemProps["marginLeft"]
}

/**
 * The `Switch` component is used as an alternative for the checkbox component for switching between "enabled" and "disabled" states.
 *
 * @see Docs https://incmix-ui.com/docs/components/switch
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/switch/
 */
export const Switch = forwardRef<SwitchProps, "input">(function Switch(
  props,
  ref,
) {
  const styles = useMultiStyleConfig("Switch", props)

  const { spacing = "0.5rem", children, ...ownProps } = omitThemingProps(props)

  const {
    state,
    getInputProps,
    getCheckboxProps,
    getRootProps,
    getLabelProps,
  } = useCheckbox(ownProps)

  const containerStyles: SystemStyleObject = useMemo(
    () => ({
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      lineHeight: 0,
      ...styles.container,
    }),
    [styles.container],
  )

  const trackStyles: SystemStyleObject = useMemo(
    () => ({
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "flex-start",
      boxSizing: "content-box",
      cursor: "pointer",
      ...styles.track,
    }),
    [styles.track],
  )

  const labelStyles: SystemStyleObject = useMemo(
    () => ({
      userSelect: "none",
      marginStart: spacing,
      ...styles.label,
    }),
    [spacing, styles.label],
  )

  return (
    <incmix.label
      {...getRootProps()}
      className={cx("incmix-switch", props.className)}
      __css={containerStyles}
    >
      <input className="incmix-switch__input" {...getInputProps({}, ref)} />
      <incmix.span
        {...getCheckboxProps()}
        className="incmix-switch__track"
        __css={trackStyles}
      >
        <incmix.span
          __css={styles.thumb}
          className="incmix-switch__thumb"
          data-checked={dataAttr(state.isChecked)}
          data-hover={dataAttr(state.isHovered)}
        />
      </incmix.span>
      {children && (
        <incmix.span
          className="incmix-switch__label"
          {...getLabelProps()}
          __css={labelStyles}
        >
          {children}
        </incmix.span>
      )}
    </incmix.label>
  )
})

Switch.displayName = "Switch"
