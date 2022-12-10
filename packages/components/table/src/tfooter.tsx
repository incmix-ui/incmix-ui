import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { useTableStyles } from "./table"

export interface TableFooterProps extends HTMLincmixProps<"tfoot"> {}

export const Tfoot = forwardRef<TableFooterProps, "tfoot">((props, ref) => {
  const styles = useTableStyles()
  return <incmix.tfoot {...props} ref={ref} __css={styles.tfoot} />
})
