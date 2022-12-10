import { forwardRef } from "@incmix-ui/system"

import { Stack, StackProps } from "./stack"

/**
 * A view that arranges its children in a vertical line.
 *
 * @see Docs https://incmix-ui.com/docs/components/stack
 */
export const VStack = forwardRef<StackProps, "div">((props, ref) => (
  <Stack align="center" {...props} direction="column" ref={ref} />
))

VStack.displayName = "VStack"
