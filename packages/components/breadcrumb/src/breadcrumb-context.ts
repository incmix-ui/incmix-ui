import { createContext } from "@incmix-ui/react-context"
import { SystemStyleObject } from "@incmix-ui/system"

export const [BreadcrumbStylesProvider, useBreadcrumbStyles] = createContext<
  Record<string, SystemStyleObject>
>({
  name: `BreadcrumbStylesContext`,
  errorMessage: `useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `,
})
