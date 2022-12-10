import * as React from "react"
import {
  Incmix,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
} from "@incmix-ui/react"
import logo from "./logo.svg"

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`

  return <Incmix.img animation={animation} src={logo} ref={ref} {...props} />
})
