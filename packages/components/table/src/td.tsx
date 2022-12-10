import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { useTableStyles } from "./table"

export interface TableCellProps extends HTMLincmixProps<"td"> {
  /**
   * Aligns the cell content to the right
   */
  isNumeric?: boolean
}
export const Td = forwardRef<TableCellProps, "td">(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles()

    return (
      <incmix.td
        {...rest}
        ref={ref}
        __css={styles.td}
        data-is-numeric={isNumeric}
      />
    )
  },
)
