import {
  incmix,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLincmixProps,
} from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { getValidChildren } from "@incmix-ui/react-children-utils"
import {
  PinInputDescendantsProvider,
  PinInputProvider,
  usePinInput,
  usePinInputField,
  UsePinInputProps,
} from "./use-pin-input"
import { cloneElement } from "react"

interface InputOptions {
  /**
   * The border color when the input is focused. Use color keys in `theme.colors`
   * @example
   * focusBorderColor = "blue.500"
   */
  focusBorderColor?: string
  /**
   * The border color when the input is invalid. Use color keys in `theme.colors`
   * @example
   * errorBorderColor = "red.500"
   */
  errorBorderColor?: string
}

export interface PinInputProps
  extends UsePinInputProps,
    ThemingProps<"PinInput">,
    InputOptions {
  /**
   * The children of the pin input component
   */
  children: React.ReactNode
}

/**
 * The `PinInput` component is similar to the Input component, but is optimized for entering sequences of digits quickly.
 *
 * @see Docs https://incmix-ui.com/docs/components/pin-input
 */
export function PinInput(props: PinInputProps) {
  const styles = useStyleConfig("PinInput", props)

  const { children, ...rest } = omitThemingProps(props)
  const { descendants, ...context } = usePinInput(rest)

  const clones = getValidChildren(children).map((child) =>
    cloneElement(child, { __css: styles }),
  )

  return (
    <PinInputDescendantsProvider value={descendants}>
      <PinInputProvider value={context}>{clones}</PinInputProvider>
    </PinInputDescendantsProvider>
  )
}

PinInput.displayName = "PinInput"

export interface PinInputFieldProps extends HTMLincmixProps<"input"> {}

export const PinInputField = forwardRef<PinInputFieldProps, "input">(
  function PinInputField(props, ref) {
    const inputProps = usePinInputField(props, ref)
    return (
      <incmix.input
        {...inputProps}
        className={cx("incmix-pin-input", props.className)}
      />
    )
  },
)

PinInputField.displayName = "PinInputField"
