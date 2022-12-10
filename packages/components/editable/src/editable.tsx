import { cx, runIfFn } from "@incmix-ui/shared-utils"
import {
  incmix,
  forwardRef,
  HTMLincmixProps,
  omitThemingProps,
  ThemingProps,
  useMultiStyleConfig,
} from "@incmix-ui/system"
import { EditableProvider, EditableStylesProvider } from "./editable-context"
import {
  useEditable,
  UseEditableProps,
  UseEditableReturn,
} from "./use-editable"

type RenderProps = Pick<
  UseEditableReturn,
  "isEditing" | "onSubmit" | "onCancel" | "onEdit"
>

type MaybeRenderProp<P> = React.ReactNode | ((props: P) => React.ReactNode)

interface BaseEditableProps
  extends Omit<
    HTMLincmixProps<"div">,
    "onChange" | "value" | "defaultValue" | "onSubmit"
  > {}

export interface EditableProps
  extends UseEditableProps,
    Omit<BaseEditableProps, "children">,
    ThemingProps<"Editable"> {
  children?: MaybeRenderProp<RenderProps>
}

/**
 * Editable
 *
 * The wrapper that provides context and logic for all editable
 * components. It renders a `div`
 *
 * @see Docs https://incmix-ui.com/docs/components/editable
 */
export const Editable = forwardRef<EditableProps, "div">(function Editable(
  props,
  ref,
) {
  const styles = useMultiStyleConfig("Editable", props)

  const ownProps = omitThemingProps(props)
  const { htmlProps, ...context } = useEditable(ownProps)

  const { isEditing, onSubmit, onCancel, onEdit } = context

  const _className = cx("incmix-editable", props.className)

  const children = runIfFn(props.children, {
    isEditing,
    onSubmit,
    onCancel,
    onEdit,
  })

  return (
    <EditableProvider value={context}>
      <EditableStylesProvider value={styles}>
        <incmix.div
          ref={ref}
          {...(htmlProps as HTMLincmixProps<"div">)}
          className={_className}
        >
          {children}
        </incmix.div>
      </EditableStylesProvider>
    </EditableProvider>
  )
})

Editable.displayName = "Editable"
