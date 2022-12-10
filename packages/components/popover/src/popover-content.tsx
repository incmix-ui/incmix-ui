import { callAll, cx } from "@incmix-ui/shared-utils"
import {
  incmix,
  forwardRef,
  HTMLincmixProps,
  SystemStyleObject,
} from "@incmix-ui/system"
import { HTMLMotionProps } from "framer-motion"
import { usePopoverContext, usePopoverStyles } from "./popover-context"
import { PopoverTransition, PopoverTransitionProps } from "./popover-transition"

export interface PopoverContentProps extends PopoverTransitionProps {
  rootProps?: HTMLincmixProps<"div">
  motionProps?: HTMLMotionProps<"section">
}

export const PopoverContent = forwardRef<PopoverContentProps, "section">(
  function PopoverContent(props, ref) {
    const { rootProps, motionProps, ...contentProps } = props

    const { getPopoverProps, getPopoverPositionerProps, onAnimationComplete } =
      usePopoverContext()

    const styles = usePopoverStyles()
    const contentStyles: SystemStyleObject = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...styles.content,
    }

    return (
      <incmix.div
        {...getPopoverPositionerProps(rootProps)}
        __css={styles.popper}
        className="incmix-popover__popper"
      >
        <PopoverTransition
          {...motionProps}
          {...getPopoverProps(contentProps, ref)}
          onAnimationComplete={callAll(
            onAnimationComplete,
            contentProps.onAnimationComplete,
          )}
          className={cx("incmix-popover__content", props.className)}
          __css={contentStyles}
        />
      </incmix.div>
    )
  },
)

PopoverContent.displayName = "PopoverContent"
