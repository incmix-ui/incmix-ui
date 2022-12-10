import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { useEditableContext, useEditableStyles } from "./editable-context"
import { commonStyles } from "./shared"

export interface EditableInputProps extends HTMLincmixProps<"input"> {}
/**
 * EditableInput
 *
 * The input used in the `edit` mode
 */

export const EditableInput = forwardRef<EditableInputProps, "input">(
  function EditableInput(props, ref) {
    const { getInputProps } = useEditableContext()
    const styles = useEditableStyles()

    const inputProps = getInputProps(props, ref)
    const _className = cx("incmix-editable__input", props.className)

    return (
      <incmix.input
        {...inputProps}
        __css={{
          outline: 0,
          ...commonStyles,
          ...styles.input,
        }}
        className={_className}
      />
    )
  },
)
EditableInput.displayName = "EditableInput"
