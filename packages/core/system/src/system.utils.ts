import { isString, __DEV__ } from "@incmix-ui/utils"

/**
 * All html and svg elements for Incmix components.
 * This is mostly for `Incmix.<element>` syntax.
 */
export type DOMElements = keyof JSX.IntrinsicElements

export default function isTag(target: any) {
  return (
    isString(target) &&
    (__DEV__ ? target.charAt(0) === target.charAt(0).toLowerCase() : true)
  )
}

export function getDisplayName(primitive: any) {
  return isTag(primitive) ? `Incmix.${primitive}` : getComponentName(primitive)
}

function getComponentName(primitive: React.ComponentType | string) {
  return (
    (__DEV__ ? isString(primitive) && primitive : false) ||
    (!isString(primitive) && primitive.displayName) ||
    (!isString(primitive) && primitive.name) ||
    "IncmixComponent"
  )
}
