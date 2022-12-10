import {
  incmix,
  forwardRef,
  HTMLincmixProps,
  omitThemingProps,
  ThemingProps,
  useMultiStyleConfig,
  SystemStyleObject,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { createContext } from "@incmix-ui/react-context"

const [TableStylesProvider, useTableStyles] = createContext<
  Record<string, SystemStyleObject>
>({
  name: `TableStylesContext`,
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `,
})

export { useTableStyles }

export interface TableOptions {}

export interface TableProps
  extends HTMLincmixProps<"table">,
    TableOptions,
    ThemingProps<"Table"> {}

/**
 * The `Table` component is used to organize and display data efficiently. It renders a `<table>` element by default.
 *
 * @see Docs https://incmix-ui.com/docs/components/table
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/table/
 */
export const Table = forwardRef<TableProps, "table">((props, ref) => {
  const styles = useMultiStyleConfig("Table", props)
  const { className, ...tableProps } = omitThemingProps(props)

  return (
    <TableStylesProvider value={styles}>
      <incmix.table
        ref={ref}
        __css={styles.table}
        className={cx("incmix-table", className)}
        {...tableProps}
      />
    </TableStylesProvider>
  )
})

Table.displayName = "Table"
