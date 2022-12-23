import {
  ChakraProvider as BaseChakraProvider,
  ChakraProviderProps as BaseChakraProviderProps,
} from "@chakra-ui/provider"
import { theme as defaultTheme, baseTheme, Theme } from "@chakra-ui/theme"
import { ToastProvider, ToastProviderProps } from "@chakra-ui/toast"
import { Dict } from "@chakra-ui/utils"

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
