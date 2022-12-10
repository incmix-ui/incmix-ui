import theme, { incmixTheme, isincmixTheme } from "../src"

describe("Theme", () => {
  it("should be of type incmixTheme", () => {
    // Check if default theme is of type incmixTheme
    const defaultThemeIsAincmixTheme: incmixTheme = theme
    expect(defaultThemeIsAincmixTheme).toBeTruthy()
  })

  it("should be check that this is a incmixTheme", () => {
    expect(isincmixTheme(theme)).toBeTruthy()
  })

  it("should be check that this is not a incmixTheme", () => {
    expect(isincmixTheme({ colors: {} })).toBeFalsy()
  })
})
