import {
  incmix,
  forwardRef,
  HTMLincmixProps,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { useFormControlContext, useFormControlStyles } from "./form-control"

export interface FormLabelProps
  extends HTMLincmixProps<"label">,
    ThemingProps<"FormLabel"> {
  /**
   * @type React.ReactElement
   */
  requiredIndicator?: React.ReactElement
  /**
   * @type React.ReactNode
   */
  optionalIndicator?: React.ReactNode
}

/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibility: Every form field should have a form label.
 */
export const FormLabel = forwardRef<FormLabelProps, "label">(function FormLabel(
  passedProps,
  ref,
) {
  const styles = useStyleConfig("FormLabel", passedProps)
  const props = omitThemingProps(passedProps)

  const {
    className,
    children,
    requiredIndicator = <RequiredIndicator />,
    optionalIndicator = null,
    ...rest
  } = props

  const field = useFormControlContext()
  const ownProps = field?.getLabelProps(rest, ref) ?? { ref, ...rest }

  return (
    <incmix.label
      {...ownProps}
      className={cx("incmix-form__label", props.className)}
      __css={{
        display: "block",
        textAlign: "start",
        ...styles,
      }}
    >
      {children}
      {field?.isRequired ? requiredIndicator : optionalIndicator}
    </incmix.label>
  )
})

FormLabel.displayName = "FormLabel"

export interface RequiredIndicatorProps extends HTMLincmixProps<"span"> {}

/**
 * Used to show a "required" text or an asterisks (*) to indicate that
 * a field is required.
 */
export const RequiredIndicator = forwardRef<RequiredIndicatorProps, "span">(
  function RequiredIndicator(props, ref) {
    const field = useFormControlContext()
    const styles = useFormControlStyles()

    if (!field?.isRequired) return null

    const className = cx("incmix-form__required-indicator", props.className)

    return (
      <incmix.span
        {...field?.getRequiredIndicatorProps(props, ref)}
        __css={styles.requiredIndicator}
        className={className}
      />
    )
  },
)

RequiredIndicator.displayName = "RequiredIndicator"
