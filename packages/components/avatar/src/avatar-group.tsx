import {
  incmix,
  forwardRef,
  omitThemingProps,
  SystemProps,
  SystemStyleObject,
  ThemingProps,
  useMultiStyleConfig,
  HTMLincmixProps,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { getValidChildren } from "@incmix-ui/react-children-utils"
import { compact } from "@incmix-ui/object-utils"
import { baseStyle } from "./avatar"
import { cloneElement } from "react"

interface AvatarGroupOptions {
  /**
   * The children of the avatar group.
   *
   * Ideally should be `Avatar` and `MoreIndicator` components
   */
  children: React.ReactNode
  /**
   * The space between the avatars in the group.
   * @default "-0.75rem"
   * @type SystemProps["margin"]
   */
  spacing?: SystemProps["margin"]
  /**
   * The maximum number of visible avatars
   */
  max?: number
}

export interface AvatarGroupProps
  extends AvatarGroupOptions,
    Omit<HTMLincmixProps<"div">, "children">,
    ThemingProps<"Avatar"> {}

/**
 * AvatarGroup displays a number of avatars grouped together in a stack.
 */
export const AvatarGroup = forwardRef<AvatarGroupProps, "div">(
  function AvatarGroup(props, ref) {
    const styles = useMultiStyleConfig("Avatar", props)

    const {
      children,
      borderColor,
      max,
      spacing = "-0.75rem",
      borderRadius = "full",
      ...rest
    } = omitThemingProps(props)

    const validChildren = getValidChildren(children)

    /**
     * get the avatars within the max
     */
    const childrenWithinMax = max ? validChildren.slice(0, max) : validChildren

    /**
     * get the remaining avatar count
     */
    const excess = max != null && validChildren.length - max

    /**
     * Reversing the children is a great way to avoid using zIndex
     * to overlap the avatars
     */
    const reversedChildren = childrenWithinMax.reverse()

    const clones = reversedChildren.map((child, index) => {
      const isFirstAvatar = index === 0

      const childProps = {
        marginEnd: isFirstAvatar ? 0 : spacing,
        size: props.size,
        borderColor: child.props.borderColor ?? borderColor,
        showBorder: true,
      }

      return cloneElement(child, compact(childProps))
    })

    const groupStyles: SystemStyleObject = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "row-reverse",
      ...styles.group,
    }

    const excessStyles: SystemStyleObject = {
      borderRadius,
      marginStart: spacing,
      ...baseStyle,
      ...styles.excessLabel,
    }

    return (
      <incmix.div
        ref={ref}
        role="group"
        __css={groupStyles}
        {...rest}
        className={cx("incmix-avatar__group", props.className)}
      >
        {excess > 0 && (
          <incmix.span className="incmix-avatar__excess" __css={excessStyles}>
            {`+${excess}`}
          </incmix.span>
        )}
        {clones}
      </incmix.div>
    )
  },
)

AvatarGroup.displayName = "AvatarGroup"
