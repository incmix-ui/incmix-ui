import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { useTableStyles } from "./table"

export interface TableRowProps extends HTMLincmixProps<"tr"> {}
export const Tr = forwardRef<TableRowProps, "tr">((props, ref) => {
  const styles = useTableStyles()

  return <incmix.tr {...props} ref={ref} __css={styles.tr} />
})
