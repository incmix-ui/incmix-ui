import { cx } from "@incmix-ui/shared-utils"
import { HTMLincmixProps, incmix, forwardRef } from "@incmix-ui/system"
import { useEffect } from "react"

import { useModalContext, useModalStyles } from "./modal"

export interface ModalBodyProps extends HTMLincmixProps<"div"> {}

/**
 * ModalBody
 *
 * React component that houses the main content of the modal.
 *
 * @see Docs https://incmix-ui.com/modal
 */
export const ModalBody = forwardRef<ModalBodyProps, "div">((props, ref) => {
  const { className, ...rest } = props
  const { bodyId, setBodyMounted } = useModalContext()

  /**
   * Notify us if this component was rendered or used,
   * so we can append `aria-describedby` automatically
   */
  useEffect(() => {
    setBodyMounted(true)
    return () => setBodyMounted(false)
  }, [setBodyMounted])

  const _className = cx("incmix-modal__body", className)
  const styles = useModalStyles()

  return (
    <incmix.div
      ref={ref}
      className={_className}
      id={bodyId}
      {...rest}
      __css={styles.body}
    />
  )
})

ModalBody.displayName = "ModalBody"
