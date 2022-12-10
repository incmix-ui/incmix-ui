import { DOMElements } from "./system.utils"
import { IncmixStyledOptions, HTMLIncmixComponents, styled } from "./system"
import { As, IncmixComponent } from "./system.types"

type IncmixFactory = {
  <T extends As, P = {}>(
    component: T,
    options?: IncmixStyledOptions,
  ): IncmixComponent<T, P>
}

function factory() {
  const cache = new Map<DOMElements, IncmixComponent<DOMElements>>()

  return new Proxy(styled, {
    /**
     * @example
     * const Div = Incmix("div")
     * const WithIncmix = Incmix(AnotherComponent)
     */
    apply(target, thisArg, argArray: [DOMElements, IncmixStyledOptions]) {
      return styled(...argArray)
    },
    /**
     * @example
     * <incmix.div />
     */
    get(_, element: DOMElements) {
      if (!cache.has(element)) {
        cache.set(element, styled(element))
      }
      return cache.get(element)
    },
  }) as IncmixFactory & HTMLIncmixComponents
}
/**
 * The Incmix factory serves as an object of Incmix enabled JSX elements,
 * and also a function that can be used to enable custom component receive Incmix's style props.
 *
 * @see Docs https://incmix-ui.com/docs/styled-system/Incmix-factory
 */
export const incmix = factory()
