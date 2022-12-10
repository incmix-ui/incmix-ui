import {
  incmixProvider as BaseincmixProvider,
  incmixProviderProps as BaseincmixProviderProps,
} from "@incmix-ui/provider"
import { theme as defaultTheme, baseTheme, Theme } from "@incmix-ui/theme"
import { ToastProvider, ToastProviderProps } from "@incmix-ui/toast"
import { Dict } from "@incmix-ui/utils"

export interface incmixProviderProps extends BaseincmixProviderProps {
  /**
   * Provide defaults for `useToast()` usages for `incmixProvider`s children
   */
  toastOptions?: ToastProviderProps
}

const createincmixProvider = (
  providerTheme: Theme | (Omit<Theme, "components"> & { components: Dict }),
) => {
  return function incmixProvider({
    children,
    theme = providerTheme,
    toastOptions,
    ...restProps
  }: incmixProviderProps) {
    return (
      <BaseincmixProvider theme={theme} {...restProps}>
        {children}
        <ToastProvider {...toastOptions} />
      </BaseincmixProvider>
    )
  }
}

export const incmixProvider = createincmixProvider(defaultTheme)
export const incmixBaseProvider = createincmixProvider(baseTheme)
