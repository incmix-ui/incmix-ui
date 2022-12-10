import { CSSReset, CSSPolyfill } from "@incmix-ui/css-reset"
import { PortalManager } from "@incmix-ui/portal"
import {
  ColorModeProvider,
  ColorModeProviderProps,
  GlobalStyle,
  ThemeProvider,
  ThemeProviderProps,
} from "@incmix-ui/system"
import { Dict } from "@incmix-ui/utils"
import {
  EnvironmentProvider,
  EnvironmentProviderProps,
} from "@incmix-ui/react-env"

export interface incmixProviderProps
  extends Pick<ThemeProviderProps, "cssVarsRoot"> {
  /**
   * a theme. if omitted, uses the default theme provided by incmix
   */
  theme?: Dict
  /**
   * Common z-index to use for `Portal`
   *
   * @default undefined
   */
  portalZIndex?: number
  /**
   * If `true`, `CSSReset` component will be mounted to help
   * you reset browser styles
   *
   * @default true
   */
  resetCSS?: boolean
  /**
   * manager to persist a users color mode preference in
   *
   * omit if you don't render server-side
   * for SSR: choose `cookieStorageManager`
   *
   * @default localStorageManager
   */
  colorModeManager?: ColorModeProviderProps["colorModeManager"]
  /**
   * Your application content
   */
  children?: React.ReactNode
  /**
   * The environment (`window` and `document`) to be used by
   * all components and hooks.
   *
   * By default, we smartly determine the ownerDocument and defaultView
   * based on where `incmixProvider` is rendered.
   */
  environment?: EnvironmentProviderProps["environment"]
}

/**
 * The global provider that must be added to make all incmix components
 * work correctly
 */
export const incmixProvider: React.FC<incmixProviderProps> = (props) => {
  const {
    children,
    colorModeManager,
    portalZIndex,
    resetCSS = true,
    theme = {},
    environment,
    cssVarsRoot,
  } = props

  const _children = (
    <EnvironmentProvider environment={environment}>
      {children}
    </EnvironmentProvider>
  )

  return (
    <ThemeProvider theme={theme as Dict} cssVarsRoot={cssVarsRoot}>
      <ColorModeProvider
        colorModeManager={colorModeManager}
        options={theme.config}
      >
        {resetCSS ? <CSSReset /> : <CSSPolyfill />}
        <GlobalStyle />
        {portalZIndex ? (
          <PortalManager zIndex={portalZIndex}>{_children}</PortalManager>
        ) : (
          _children
        )}
      </ColorModeProvider>
    </ThemeProvider>
  )
}
