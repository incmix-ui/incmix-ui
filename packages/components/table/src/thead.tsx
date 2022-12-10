import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { useTableStyles } from "./table"

export interface TableHeadProps extends HTMLincmixProps<"thead"> {}

export const Thead = forwardRef<TableHeadProps, "thead">((props, ref) => {
  const styles = useTableStyles()
  return <incmix.thead {...props} ref={ref} __css={styles.thead} />
})
