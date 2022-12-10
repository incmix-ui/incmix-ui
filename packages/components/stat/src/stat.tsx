import { createContext } from "@incmix-ui/react-context"
import {
  incmix,
  forwardRef,
  HTMLincmixProps,
  omitThemingProps,
  SystemStyleObject,
  ThemingProps,
  useMultiStyleConfig,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"

const [StatStylesProvider, useStatStyles] = createContext<
  Record<string, SystemStyleObject>
>({
  name: `StatStylesContext`,
  errorMessage: `useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `,
})

export { useStatStyles }

export interface StatProps
  extends HTMLincmixProps<"div">,
    ThemingProps<"Stat"> {}

/**
 * The `Stat` component is used to display some statistics.
 *
 * @see Docs https://incmix-ui.com/docs/components/stat
 */
export const Stat = forwardRef<StatProps, "div">(function Stat(props, ref) {
  const styles = useMultiStyleConfig("Stat", props)
  const statStyles: SystemStyleObject = {
    position: "relative",
    flex: "1 1 0%",
    ...styles.container,
  }

  const { className, children, ...rest } = omitThemingProps(props)

  return (
    <StatStylesProvider value={styles}>
      <incmix.div
        ref={ref}
        {...rest}
        className={cx("incmix-stat", className)}
        __css={statStyles}
      >
        <dl>{children}</dl>
      </incmix.div>
    </StatStylesProvider>
  )
})

Stat.displayName = "Stat"
