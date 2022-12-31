import {
  ChakraProvider as BaseChakraProvider,
  ChakraProviderProps as BaseChakraProviderProps,
} from "@incmix-ui/provider"
import { baseTheme, Theme, theme as defaultTheme } from "@incmix-ui/theme"
import { ToastProvider, ToastProviderProps } from "@incmix-ui/toast"
import { Dict } from "@incmix-ui/utils"

export interface IncmixProviderProps extends BaseChakraProviderProps {
  /**
   * Provide defaults for `useToast()` usages for `ChakraProvider`s children
   */
  toastOptions?: ToastProviderProps
}

const createChakraProvider = (
  providerTheme: Theme | (Omit<Theme, "components"> & { components: Dict }),
) => {
  return function ChakraProvider({
    children,
    theme = providerTheme,
    toastOptions,
    ...restProps
  }: IncmixProviderProps) {
    return (
      <BaseChakraProvider theme={theme} {...restProps}>
        {children}
        <ToastProvider {...toastOptions} />
      </BaseChakraProvider>
    )
  }
}

export const IncmixProvider = createChakraProvider(defaultTheme)
export const IncmixBaseProvider = createChakraProvider(baseTheme)
export const ChakraProvider = IncmixProvider
export type ChakraProviderProps = IncmixProviderProps
