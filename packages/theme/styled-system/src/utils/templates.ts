/**
 * The CSS transform order following the upcoming spec from CSSWG
 * translate => rotate => scale => skew
 * @see https://drafts.csswg.org/css-transforms-2/#ctm
 * @see https://www.stefanjudis.com/blog/order-in-css-transformation-transform-functions-vs-individual-transforms/
 */
const transformTemplate = [
  "rotate(var(--Incmix-rotate, 0))",
  "scaleX(var(--Incmix-scale-x, 1))",
  "scaleY(var(--Incmix-scale-y, 1))",
  "skewX(var(--Incmix-skew-x, 0))",
  "skewY(var(--Incmix-skew-y, 0))",
]

export function getTransformTemplate() {
  return [
    "translateX(var(--Incmix-translate-x, 0))",
    "translateY(var(--Incmix-translate-y, 0))",
    ...transformTemplate,
  ].join(" ")
}

export function getTransformGpuTemplate() {
  return [
    "translate3d(var(--Incmix-translate-x, 0), var(--Incmix-translate-y, 0), 0)",
    ...transformTemplate,
  ].join(" ")
}

export const filterTemplate = {
  "--Incmix-blur": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-brightness": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-contrast": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-grayscale": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-hue-rotate": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-invert": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-saturate": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-sepia": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-drop-shadow": "var(--Incmix-empty,/*!*/ /*!*/)",
  filter: [
    "var(--Incmix-blur)",
    "var(--Incmix-brightness)",
    "var(--Incmix-contrast)",
    "var(--Incmix-grayscale)",
    "var(--Incmix-hue-rotate)",
    "var(--Incmix-invert)",
    "var(--Incmix-saturate)",
    "var(--Incmix-sepia)",
    "var(--Incmix-drop-shadow)",
  ].join(" "),
}

export const backdropFilterTemplate = {
  backdropFilter: [
    "var(--Incmix-backdrop-blur)",
    "var(--Incmix-backdrop-brightness)",
    "var(--Incmix-backdrop-contrast)",
    "var(--Incmix-backdrop-grayscale)",
    "var(--Incmix-backdrop-hue-rotate)",
    "var(--Incmix-backdrop-invert)",
    "var(--Incmix-backdrop-opacity)",
    "var(--Incmix-backdrop-saturate)",
    "var(--Incmix-backdrop-sepia)",
  ].join(" "),
  "--Incmix-backdrop-blur": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-backdrop-brightness": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-backdrop-contrast": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-backdrop-grayscale": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-backdrop-hue-rotate": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-backdrop-invert": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-backdrop-opacity": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-backdrop-saturate": "var(--Incmix-empty,/*!*/ /*!*/)",
  "--Incmix-backdrop-sepia": "var(--Incmix-empty,/*!*/ /*!*/)",
}

export function getRingTemplate(value: any) {
  return {
    "--Incmix-ring-offset-shadow": `var(--Incmix-ring-inset) 0 0 0 var(--Incmix-ring-offset-width) var(--Incmix-ring-offset-color)`,
    "--Incmix-ring-shadow": `var(--Incmix-ring-inset) 0 0 0 calc(var(--Incmix-ring-width) + var(--Incmix-ring-offset-width)) var(--Incmix-ring-color)`,
    "--Incmix-ring-width": value,
    boxShadow: [
      `var(--Incmix-ring-offset-shadow)`,
      `var(--Incmix-ring-shadow)`,
      `var(--Incmix-shadow, 0 0 #0000)`,
    ].join(", "),
  }
}

export const flexDirectionTemplate = {
  "row-reverse": {
    space: "--Incmix-space-x-reverse",
    divide: "--Incmix-divide-x-reverse",
  },
  "column-reverse": {
    space: "--Incmix-space-y-reverse",
    divide: "--Incmix-divide-y-reverse",
  },
}

const owlSelector = "& > :not(style) ~ :not(style)"

export const spaceXTemplate = {
  [owlSelector]: {
    marginInlineStart:
      "calc(var(--Incmix-space-x) * calc(1 - var(--Incmix-space-x-reverse)))",
    marginInlineEnd:
      "calc(var(--Incmix-space-x) * var(--Incmix-space-x-reverse))",
  },
}

export const spaceYTemplate = {
  [owlSelector]: {
    marginTop:
      "calc(var(--Incmix-space-y) * calc(1 - var(--Incmix-space-y-reverse)))",
    marginBottom: "calc(var(--Incmix-space-y) * var(--Incmix-space-y-reverse))",
  },
}
