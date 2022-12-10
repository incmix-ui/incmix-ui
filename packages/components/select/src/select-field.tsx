import { cx } from "@incmix-ui/shared-utils"
import { HTMLincmixProps, incmix, forwardRef } from "@incmix-ui/system"

type Omitted = "disabled" | "required" | "readOnly" | "size"

export interface SelectFieldProps
  extends Omit<HTMLincmixProps<"select">, Omitted> {
  isDisabled?: boolean
}

export const SelectField = forwardRef<SelectFieldProps, "select">(
  function SelectField(props, ref) {
    const { children, placeholder, className, ...rest } = props

    return (
      <incmix.select
        {...rest}
        ref={ref}
        className={cx("incmix-select", className)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </incmix.select>
    )
  },
)

SelectField.displayName = "SelectField"
