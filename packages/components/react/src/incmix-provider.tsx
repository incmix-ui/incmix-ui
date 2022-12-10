import {
  incmixProvider as BaseincmixProvider,
  incmixProviderProps as BaseincmixProviderProps,
} from "@incmix-ui/provider"
import { theme as defaultTheme, baseTheme, Theme } from "@incmix-ui/theme"
import { Dict } from "@incmix-ui/utils"

export interface incmixProviderProps extends BaseincmixProviderProps {
  /**
   * Provide defaults for `useToast()` usages for `incmixProvider`s children
   */
}

const createIncmixProvider = (
  providerTheme: Theme | (Omit<Theme, "components"> & { components: Dict }),
) => {
  return function incmixProvider({
    children,
    theme = providerTheme,
    ...restProps
  }: incmixProviderProps) {
    return (
      <BaseincmixProvider theme={theme} {...restProps}>
        {children}
      </BaseincmixProvider>
    )
  }
}

export const IncmixProvider = createIncmixProvider(defaultTheme)
export const IncmixBaseProvider = createIncmixProvider(baseTheme)
