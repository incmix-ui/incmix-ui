import { incmix, HTMLIncmixProps } from "@incmix-ui/system"

export interface SpacerProps extends HTMLIncmixProps<"div"> {}

/**
 * A flexible flex spacer that expands along the major axis of its containing flex layout.
 * It renders a `div` by default, and takes up any available space.
 *
 * @see Docs https://incmix-ui.com/flex#using-the-spacer
 */
export const Spacer = incmix("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch",
  },
})

Spacer.displayName = "Spacer"
