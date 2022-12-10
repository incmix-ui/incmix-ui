import { cx } from "@incmix-ui/shared-utils"
import {
  incmix,
  incmixProps,
  SystemStyleObject,
  forwardRef,
} from "@incmix-ui/system"
import { fadeConfig } from "@incmix-ui/transition"
import { motion, HTMLMotionProps } from "framer-motion"

import { useModalStyles, useModalContext } from "./modal"

const MotionDiv = incmix(motion.div)

export interface ModalOverlayProps
  extends Omit<HTMLMotionProps<"div">, "color" | "transition">,
    incmixProps {
  children?: React.ReactNode
  motionProps?: HTMLMotionProps<"div">
}

/**
 * ModalOverlay renders a backdrop behind the modal. It is
 * also used as a wrapper for the modal content for better positioning.
 *
 * @see Docs https://incmix-ui.com/modal
 */
export const ModalOverlay = forwardRef<ModalOverlayProps, "div">(
  (props, ref) => {
    const { className, transition, motionProps: _motionProps, ...rest } = props
    const _className = cx("incmix-modal__overlay", className)

    const styles = useModalStyles()
    const overlayStyle: SystemStyleObject = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...styles.overlay,
    }

    const { motionPreset } = useModalContext()
    const defaultMotionProps: HTMLMotionProps<"div"> =
      motionPreset === "none" ? {} : fadeConfig

    const motionProps: any = _motionProps || defaultMotionProps

    return (
      <MotionDiv
        {...motionProps}
        __css={overlayStyle}
        ref={ref}
        className={_className}
        {...rest}
      />
    )
  },
)

ModalOverlay.displayName = "ModalOverlay"
