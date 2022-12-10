import { IncmixComponent, incmix } from "@incmix-ui/system"

export const StackItem: IncmixComponent<"div"> = (props) => (
  <incmix.div
    className="incmix-stack__item"
    {...props}
    __css={{
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...props["__css"],
    }}
  />
)

StackItem.displayName = "StackItem"
