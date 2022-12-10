import { incmix } from "@incmix-ui/system"
import { visuallyHiddenStyle } from "./visually-hidden.style"

/**
 * Visually hidden component used to hide
 * elements on screen
 *
 * @see Docs https://incmix-ui.com/docs/components/visually-hidden
 */
export const VisuallyHidden = incmix("span", {
  baseStyle: visuallyHiddenStyle,
})

VisuallyHidden.displayName = "VisuallyHidden"

/**
 * Visually hidden input component for designing
 * custom input components using the html `input`
 * as a proxy
 *
 * @see Docs https://incmix-ui.com/docs/components/visually-hidden#visually-hidden-input
 */
export const VisuallyHiddenInput = incmix("input", {
  baseStyle: visuallyHiddenStyle,
})

VisuallyHiddenInput.displayName = "VisuallyHiddenInput"

export default VisuallyHidden
