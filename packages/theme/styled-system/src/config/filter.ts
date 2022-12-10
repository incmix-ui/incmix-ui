import * as CSS from "csstype"
import { Config } from "../utils/prop-config"
import { Length, Token, t, transforms } from "../utils"

export const filter: Config = {
  filter: { transform: transforms.filter },
  blur: t.blur("--Incmix-blur"),
  brightness: t.propT("--Incmix-brightness", transforms.brightness),
  contrast: t.propT("--Incmix-contrast", transforms.contrast),
  hueRotate: t.degreeT("--Incmix-hue-rotate"),
  invert: t.propT("--Incmix-invert", transforms.invert),
  saturate: t.propT("--Incmix-saturate", transforms.saturate),
  dropShadow: t.propT("--Incmix-drop-shadow", transforms.dropShadow),
  backdropFilter: { transform: transforms.backdropFilter },
  backdropBlur: t.blur("--Incmix-backdrop-blur"),
  backdropBrightness: t.propT(
    "--Incmix-backdrop-brightness",
    transforms.brightness,
  ),
  backdropContrast: t.propT("--Incmix-backdrop-contrast", transforms.contrast),
  backdropHueRotate: t.degreeT("--Incmix-backdrop-hue-rotate"),
  backdropInvert: t.propT("--Incmix-backdrop-invert", transforms.invert),
  backdropSaturate: t.propT("--Incmix-backdrop-saturate", transforms.saturate),
}

export interface FilterProps {
  /**
   * The CSS `filter` property. When set to `auto`, you allow
   * Incmix UI to define the color based on the filter style props
   * (`blur`, `saturate`, etc.)
   */
  filter?: Token<CSS.Property.Filter | "auto">
  /**
   * Sets the blur filter value of an element.
   * Value is assigned to `--Incmix-filter` css variable
   */
  blur?: Token<{}, "blur">
  /**
   * Sets the brightness filter value of an element.
   * Value is assigned to `--Incmix-brightness` css variable
   */
  brightness?: Token<Length>
  /**
   * Sets the contrast filter value of an element.
   * Value is assigned to `--Incmix-contrast` css variable
   */
  contrast?: Token<Length>
  /**
   * Sets the hue-rotate filter value of an element.
   * Value is assigned to `--Incmix-hue-rotate` css variable
   */
  hueRotate?: Token<Length>
  /**
   * Sets the invert filter value of an element.
   * Value is assigned to `--Incmix-invert` css variable
   */
  invert?: Token<Length>
  /**
   * Sets the saturation filter value of an element.
   * Value is assigned to `--Incmix-saturate` css variable
   */
  saturate?: Token<Length>
  /**
   * Sets the drop-shadow filter value of an element.
   * Value is assigned to `--Incmix-drop-shadow` css variable
   */
  dropShadow?: Token<CSS.Property.BoxShadow, "shadows">
  /**
   * The CSS `backdrop-filter` property. When set to `auto`, you allow
   * Incmix UI to define the color based on the backdrop filter style props
   * (`backdropBlur`, `backdropSaturate`, etc.)
   */
  backdropFilter?: Token<CSS.Property.BackdropFilter | "auto">
  /**
   * Sets the backdrop-blur filter value of an element.
   * Value is assigned to `--Incmix-backdrop-blur` css variable
   */
  backdropBlur?: Token<{}, "blur">
  /**
   * Sets the backdrop-brightness filter value of an element.
   * Value is assigned to `--Incmix-backdrop-brightness` css variable
   */
  backdropBrightness?: Token<Length>
  /**
   * Sets the backdrop-contrast filter value of an element.
   * Value is assigned to `--Incmix-backdrop-contrast` css variable
   */
  backdropContrast?: Token<Length>
  /**
   * Sets the backdrop-hue-rotate filter value of an element.
   * Value is assigned to `--Incmix-backdrop-hue-rotate` css variable
   */
  backdropHueRotate?: Token<Length>
  /**
   * Sets the backdrop-invert filter value of an element.
   * Value is assigned to `--Incmix-backdrop-invert` css variable
   */
  backdropInvert?: Token<Length>
  /**
   * Sets the backdrop-saturate filter value of an element.
   * Value is assigned to `--Incmix-backdrop-saturate` css variable
   */
  backdropSaturate?: Token<Length>
}
