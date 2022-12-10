import { createDescendantContext } from "@incmix-ui/descendant"
import { createContext } from "@incmix-ui/react-context"
import { SystemStyleObject } from "@incmix-ui/system"
import { UseAccordionItemReturn } from "./use-accordion"

export const [AccordionStylesProvider, useAccordionStyles] = createContext<
  Record<string, SystemStyleObject>
>({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />",
})

type AccordionItemContext = Omit<UseAccordionItemReturn, "htmlProps">

export const [AccordionItemProvider, useAccordionItemContext] =
  createContext<AccordionItemContext>({
    name: "AccordionItemContext",
    hookName: "useAccordionItemContext",
    providerName: "<AccordionItem />",
  })

/* -------------------------------------------------------------------------------------------------
 * Create context to track descendants and their indices
 * -----------------------------------------------------------------------------------------------*/

export const [
  AccordionDescendantsProvider,
  useAccordionDescendantsContext,
  useAccordionDescendants,
  useAccordionDescendant,
] = createDescendantContext<HTMLButtonElement>()
