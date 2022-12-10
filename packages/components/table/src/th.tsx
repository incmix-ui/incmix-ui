import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { useTableStyles } from "./table"

export interface TableColumnHeaderProps extends HTMLincmixProps<"th"> {
  /**
   * Aligns the cell content to the right
   */
  isNumeric?: boolean
}
export const Th = forwardRef<TableColumnHeaderProps, "th">(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles()
    return (
      <incmix.th
        {...rest}
        ref={ref}
        __css={styles.th}
        data-is-numeric={isNumeric}
      />
    )
  },
)
