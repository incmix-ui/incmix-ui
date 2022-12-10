import {
  incmix,
  SystemProps,
  forwardRef,
  HTMLincmixProps,
} from "@incmix-ui/system"
import { omit } from "@incmix-ui/object-utils"
import {
  FallbackStrategy,
  shouldShowFallbackImage,
  useImage,
  UseImageProps,
} from "./use-image"
import { NativeImage, NativeImageOptions } from "./native-image"

interface ImageOptions extends NativeImageOptions {
  /**
   * Fallback image `src` to show if image is loading or image fails.
   *
   * Note 🚨: We recommend you use a local image
   */
  fallbackSrc?: string
  /**
   * Fallback element to show if image is loading or image fails.
   * @type React.ReactElement
   */
  fallback?: React.ReactElement
  /**
   * Defines loading strategy
   */
  loading?: "eager" | "lazy"
  /**
   * How the image to fit within its bounds.
   * It maps to css `object-fit` property.
   * @type SystemProps["objectFit"]
   */
  fit?: SystemProps["objectFit"]
  /**
   * How to align the image within its bounds.
   * It maps to css `object-position` property.
   * @type SystemProps["objectPosition"]
   */
  align?: SystemProps["objectPosition"]
  /**
   * If `true`, opt out of the `fallbackSrc` logic and use as `img`
   */
  ignoreFallback?: boolean

  /**
   * - beforeLoadOrError(default): loads the fallbackImage while loading the src
   * - onError: loads the fallbackImage only if there is an error fetching the src
   *
   * @default "beforeLoadOrError"
   * @see Issue https://github.com/incmix-ui/incmix-ui/issues/5581
   */
  fallbackStrategy?: FallbackStrategy
  /**
   * Defining which referrer is sent when fetching the resource.
   * @type React.HTMLAttributeReferrerPolicy
   */
  referrerPolicy?: React.HTMLAttributeReferrerPolicy
}

export interface ImageProps
  extends UseImageProps,
    Omit<HTMLincmixProps<"img">, keyof UseImageProps>,
    ImageOptions {}

/**
 * React component that renders an image with support
 * for fallbacks
 *
 * @see Docs https://incmix-ui.com/image
 */
export const Image = forwardRef<ImageProps, "img">(function Image(props, ref) {
  const {
    fallbackSrc,
    fallback,
    src,
    srcSet,
    align,
    fit,
    loading,
    ignoreFallback,
    crossOrigin,
    fallbackStrategy = "beforeLoadOrError",
    referrerPolicy,
    ...rest
  } = props

  const providedFallback = fallbackSrc !== undefined || fallback !== undefined
  /**
   * Defer to native `img` tag if `loading` prop is passed
   * @see https://github.com/incmix-ui/incmix-ui/issues/1027
   *
   * shouldIgnoreFallbackImage determines if we have the possibility to render a fallback image
   */
  const shouldIgnoreFallbackImage =
    loading != null ||
    // use can opt out of fallback image
    ignoreFallback ||
    // if the user doesn't provide any kind of fallback we should ignore it
    !providedFallback

  /**
   * returns `loaded` if fallback is ignored
   */
  const status = useImage({
    ...props,
    ignoreFallback: shouldIgnoreFallbackImage,
  })

  const showFallbackImage = shouldShowFallbackImage(status, fallbackStrategy)

  const shared = {
    ref,
    objectFit: fit,
    objectPosition: align,
    ...(shouldIgnoreFallbackImage ? rest : omit(rest, ["onError", "onLoad"])),
  }

  if (showFallbackImage) {
    /**
     * If user passed a custom fallback component,
     * let's render it here.
     */
    if (fallback) return fallback

    return (
      <incmix.img
        as={NativeImage}
        className="incmix-image__placeholder"
        src={fallbackSrc}
        {...shared}
      />
    )
  }

  return (
    <incmix.img
      as={NativeImage}
      src={src}
      srcSet={srcSet}
      crossOrigin={crossOrigin}
      loading={loading}
      referrerPolicy={referrerPolicy}
      className="incmix-image"
      {...shared}
    />
  )
})

Image.displayName = "Image"
