import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { useTableStyles } from "./table"

export interface TableBodyProps extends HTMLincmixProps<"tbody"> {}

export const Tbody = forwardRef<TableBodyProps, "tbody">((props, ref) => {
  const styles = useTableStyles()
  return <incmix.tbody {...props} ref={ref} __css={styles.tbody} />
})
