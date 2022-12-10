import * as CSS from "csstype"
import { Config } from "../utils/prop-config"
import { Length, t, Token, transforms } from "../utils"

export const transform: Config = {
  clipPath: true,
  transform: t.propT("transform", transforms.transform),
  transformOrigin: true,
  translateX: t.spaceT("--Incmix-translate-x"),
  translateY: t.spaceT("--Incmix-translate-y"),
  skewX: t.degreeT("--Incmix-skew-x"),
  skewY: t.degreeT("--Incmix-skew-y"),
  scaleX: t.prop("--Incmix-scale-x"),
  scaleY: t.prop("--Incmix-scale-y"),
  scale: t.prop(["--Incmix-scale-x", "--Incmix-scale-y"]),
  rotate: t.degreeT("--Incmix-rotate"),
}

export interface TransformProps {
  /**
   * The CSS `transform` property
   */
  transform?: Token<CSS.Property.Transform | "auto" | "auto-gpu">
  /**
   * The CSS `transform-origin` property
   */
  transformOrigin?: Token<CSS.Property.TransformOrigin | number, "sizes">
  /**
   * The CSS `clip-path` property.
   *
   * It creates a clipping region that sets what part of an element should be shown.
   */
  clipPath?: Token<CSS.Property.ClipPath>
  /**
   * Translate value of an elements in the x-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--Incmix-translate-x`
   */
  translateX?: Token<Length>
  /**
   * Translate value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--Incmix-translate-y`
   */
  translateY?: Token<Length>
  /**
   * Sets the rotation value of the element
   */
  rotate?: Token<Length>
  /**
   * Skew value of an elements in the x-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--Incmix-skew-x`
   */
  skewX?: Token<Length>
  /**
   * Skew value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--Incmix-skew-y`
   */
  skewY?: Token<Length>
  /**
   * Scale value of an elements in the x-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--Incmix-scale-x`
   */
  scaleX?: Token<Length>
  /**
   * Scale value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--Incmix-scale-y`
   */
  scaleY?: Token<Length>
  /**
   * Sets the scale value of the element
   */
  scale?: Token<Length>
}
