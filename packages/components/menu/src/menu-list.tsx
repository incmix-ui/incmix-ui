import { callAll, cx } from "@incmix-ui/shared-utils"
import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"

import { HTMLMotionProps, motion, Variants } from "framer-motion"
import { useMenuStyles } from "./menu"
import { useMenuContext, useMenuList, useMenuPositioner } from "./use-menu"

export interface MenuListProps extends HTMLincmixProps<"div"> {
  /**
   * Props for the root element that positions the menu.
   */
  rootProps?: HTMLincmixProps<"div">
  /**
   * The framer-motion props to animate the menu list
   */
  motionProps?: HTMLMotionProps<"div">
}

const motionVariants: Variants = {
  enter: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    transitionEnd: {
      visibility: "hidden",
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: "easeOut",
    },
  },
}

const MenuTransition = incmix(motion.div)

export const MenuList = forwardRef<MenuListProps, "div">(function MenuList(
  props,
  ref,
) {
  const { rootProps, motionProps, ...rest } = props
  const {
    isOpen,
    onTransitionEnd,
    unstable__animationState: animated,
  } = useMenuContext()

  const listProps = useMenuList(rest, ref) as any
  const positionerProps = useMenuPositioner(rootProps)

  const styles = useMenuStyles()

  return (
    <incmix.div
      {...positionerProps}
      __css={{ zIndex: props.zIndex ?? styles.list?.zIndex }}
    >
      <MenuTransition
        variants={motionVariants}
        initial={false}
        animate={isOpen ? "enter" : "exit"}
        __css={{ outline: 0, ...styles.list }}
        {...motionProps}
        className={cx("incmix-menu__menu-list", listProps.className)}
        {...listProps}
        onUpdate={onTransitionEnd}
        onAnimationComplete={callAll(
          animated.onComplete,
          listProps.onAnimationComplete,
        )}
      />
    </incmix.div>
  )
})

MenuList.displayName = "MenuList"
