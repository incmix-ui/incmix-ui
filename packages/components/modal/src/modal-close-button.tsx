import { CloseButtonProps, CloseButton } from "@incmix-ui/close-button"
import { cx, callAllHandlers } from "@incmix-ui/shared-utils"
import { forwardRef } from "@incmix-ui/system"

import { useModalContext, useModalStyles } from "./modal"

/**
 * ModalCloseButton is used closes the modal.
 *
 * You don't need to pass the `onClick` to it, it reads the
 * `onClose` action from the modal context.
 */
export const ModalCloseButton = forwardRef<CloseButtonProps, "button">(
  (props, ref) => {
    const { onClick, className, ...rest } = props
    const { onClose } = useModalContext()

    const _className = cx("incmix-modal__close-btn", className)

    const styles = useModalStyles()

    return (
      <CloseButton
        ref={ref}
        __css={styles.closeButton}
        className={_className}
        onClick={callAllHandlers(onClick, (event: React.MouseEvent) => {
          event.stopPropagation()
          onClose()
        })}
        {...rest}
      />
    )
  },
)

ModalCloseButton.displayName = "ModalCloseButton"
