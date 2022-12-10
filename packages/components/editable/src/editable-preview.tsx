import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { useEditableContext, useEditableStyles } from "./editable-context"
import { commonStyles } from "./shared"

export interface EditablePreviewProps extends HTMLincmixProps<"div"> {}

/**
 * EditablePreview
 *
 * The `span` used to display the final value, in the `preview` mode
 */
export const EditablePreview = forwardRef<EditablePreviewProps, "span">(
  function EditablePreview(props, ref) {
    const { getPreviewProps } = useEditableContext()
    const styles = useEditableStyles()

    const previewProps = getPreviewProps(props, ref) as HTMLincmixProps<"span">
    const _className = cx("incmix-editable__preview", props.className)

    return (
      <incmix.span
        {...previewProps}
        __css={{
          cursor: "text",
          display: "inline-block",
          ...commonStyles,
          ...styles.preview,
        }}
        className={_className}
      />
    )
  },
)
EditablePreview.displayName = "EditablePreview"
