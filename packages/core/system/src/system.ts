import { useColorMode } from "@incmix-ui/color-mode"
import {
  css,
  isStyleProp,
  StyleProps,
  SystemStyleObject,
} from "@incmix-ui/styled-system"
import { Dict, filterUndefined, objectFilter, runIfFn } from "@incmix-ui/utils"
import emotionStyled, {
  CSSObject,
  FunctionInterpolation,
} from "@emotion/styled"
import React from "react"
import { shouldForwardProp } from "./should-forward-prop"
import { As, IncmixComponent, IncmixProps, PropsOf } from "./system.types"
import { DOMElements } from "./system.utils"

type StyleResolverProps = SystemStyleObject & {
  __css?: SystemStyleObject
  sx?: SystemStyleObject
  theme: any
  css?: CSSObject
}

interface GetStyleObject {
  (options: {
    baseStyle?:
      | SystemStyleObject
      | ((props: StyleResolverProps) => SystemStyleObject)
  }): FunctionInterpolation<StyleResolverProps>
}

/**
 * Style resolver function that manages how style props are merged
 * in combination with other possible ways of defining styles.
 *
 * For example, take a component defined this way:
 * ```jsx
 * <Box fontSize="24px" sx={{ fontSize: "40px" }}></Box>
 * ```
 *
 * We want to manage the priority of the styles properly to prevent unwanted
 * behaviors. Right now, the `sx` prop has the highest priority so the resolved
 * fontSize will be `40px`
 */
export const toCSSObject: GetStyleObject =
  ({ baseStyle }) =>
  (props) => {
    const { theme, css: cssProp, __css, sx, ...rest } = props
    const styleProps = objectFilter(rest, (_, prop) => isStyleProp(prop))
    const finalBaseStyle = runIfFn(baseStyle, props)
    const finalStyles = Object.assign(
      {},
      __css,
      finalBaseStyle,
      filterUndefined(styleProps),
      sx,
    )
    const computedCSS = css(finalStyles)(props.theme)
    return cssProp ? [computedCSS, cssProp] : computedCSS
  }

export interface IncmixStyledOptions extends Dict {
  shouldForwardProp?(prop: string): boolean
  label?: string
  baseStyle?:
    | SystemStyleObject
    | ((props: StyleResolverProps) => SystemStyleObject)
}

export function styled<T extends As, P = {}>(
  component: T,
  options?: IncmixStyledOptions,
) {
  const { baseStyle, ...styledOptions } = options ?? {}

  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp
  }

  const styleObject = toCSSObject({ baseStyle })
  const Component = emotionStyled(
    component as React.ComponentType<any>,
    styledOptions,
  )(styleObject)

  const IncmixComponent = React.forwardRef(function IncmixComponent(
    props,
    ref,
  ) {
    const { colorMode, forced } = useColorMode()
    return React.createElement(Component, {
      ref,
      "data-theme": forced ? colorMode : undefined,
      ...props,
    })
  })

  return IncmixComponent as IncmixComponent<T, P>
}

export type HTMLIncmixComponents = {
  [Tag in DOMElements]: IncmixComponent<Tag, {}>
}

export type HTMLIncmixProps<T extends As> = Omit<
  PropsOf<T>,
  "ref" | keyof StyleProps
> &
  IncmixProps & { as?: As }
