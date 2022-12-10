import { HTMLincmixProps, incmixComponent, incmix } from "@incmix-ui/system"

export interface StackDividerProps extends HTMLincmixProps<"div"> {}

export const StackDivider: incmixComponent<"div"> = (props) => (
  <incmix.div
    className="incmix-stack__divider"
    {...props}
    __css={{
      ...props["__css"],
      borderWidth: 0,
      alignSelf: "stretch",
      borderColor: "inherit",
      width: "auto",
      height: "auto",
    }}
  />
)

StackDivider.displayName = "StackDivider"
