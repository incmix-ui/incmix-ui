import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { useEditableContext, useEditableStyles } from "./editable-context"
import { commonStyles } from "./shared"

export interface EditableTextareaProps extends HTMLincmixProps<"textarea"> {}

/**
 * EditableTextarea
 *
 * The textarea used in the `edit` mode
 */

export const EditableTextarea = forwardRef<EditableTextareaProps, "textarea">(
  function EditableTextarea(props, ref) {
    const { getTextareaProps } = useEditableContext()
    const styles = useEditableStyles()

    const textareaProps = getTextareaProps(props, ref)
    const _className = cx("incmix-editable__textarea", props.className)

    return (
      <incmix.textarea
        {...textareaProps}
        __css={{
          outline: 0,
          ...commonStyles,
          ...styles.textarea,
        }}
        className={_className}
      />
    )
  },
)
EditableTextarea.displayName = "EditableTextarea"
