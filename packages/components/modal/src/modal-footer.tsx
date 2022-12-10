import { cx } from "@incmix-ui/shared-utils"
import {
  HTMLincmixProps,
  SystemStyleObject,
  incmix,
  forwardRef,
} from "@incmix-ui/system"

import { useModalStyles } from "./modal"

export interface ModalFooterProps extends HTMLincmixProps<"footer"> {}

/**
 * ModalFooter houses the action buttons of the modal.
 * @see Docs https://incmix-ui.com/modal
 */
export const ModalFooter = forwardRef<ModalFooterProps, "footer">(
  (props, ref) => {
    const { className, ...rest } = props
    const _className = cx("incmix-modal__footer", className)

    const styles = useModalStyles()
    const footerStyles: SystemStyleObject = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...styles.footer,
    }

    return (
      <incmix.footer
        ref={ref}
        {...rest}
        __css={footerStyles}
        className={_className}
      />
    )
  },
)

ModalFooter.displayName = "ModalFooter"
