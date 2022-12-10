import { cx } from "@incmix-ui/shared-utils"
import { forwardRef, HTMLChakraProps, chakra } from "@incmix-ui/system"
import { useCardStyles } from "./card-context"

export interface CardHeaderProps extends HTMLChakraProps<"div"> {}

export const CardHeader = forwardRef<CardHeaderProps, "div">(
  function CardHeader(props, ref) {
    const { className, ...rest } = props
    const styles = useCardStyles()
    return (
      <chakra.div
        ref={ref}
        className={cx("chakra-card__header", className)}
        __css={styles.header}
        {...rest}
      />
    )
  },
)
