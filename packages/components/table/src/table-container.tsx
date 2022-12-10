import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

export interface TableContainerProps extends HTMLincmixProps<"div"> {}

export const TableContainer = forwardRef<TableContainerProps, "div">(
  (props: HTMLincmixProps<"div">, ref) => {
    const { overflow, overflowX, className, ...rest } = props
    return (
      <incmix.div
        ref={ref}
        className={cx("incmix-table__container", className)}
        {...rest}
        __css={{
          display: "block",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          overflowX: overflow ?? overflowX ?? "auto",
          overflowY: "hidden",
          maxWidth: "100%",
        }}
      />
    )
  },
)
