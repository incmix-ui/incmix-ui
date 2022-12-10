import { HTMLincmixProps, incmix, forwardRef } from "@incmix-ui/system"

import { NativeImageOptions, NativeImage } from "./native-image"

export interface ImgProps extends HTMLincmixProps<"img">, NativeImageOptions {}

/**
 * Fallback component for most SSR users who want to use the native `img` with
 * support for incmix props
 */
export const Img = forwardRef<ImgProps, "img">((props, ref) => (
  <incmix.img ref={ref} as={NativeImage} className="incmix-image" {...props} />
))
