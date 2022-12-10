/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { Incmix, IncmixComponent } from ".."

/**
 * These tests should fail while type checking
 * if the typings for `IncmixComponent` change
 * and create a type regression
 */
describe("`as` prop typings", () => {
  const Comp = (props: {}) => null

  type CompWithRequiredProps = { thisIsARequiredProp: boolean }
  const CompWithRequired = (props: CompWithRequiredProps) => null

  it("should have correct types for the Incmix factory", () => {
    const div = <incmix.div />
    const divWithAsTag = <incmix.div as="img" src="/this-is-the-way.webp" />
    const divWithAsComp = <incmix.div as={Comp} />
    const divWithAsCompRequired = (
      <incmix.div as={CompWithRequired} thisIsARequiredProp />
    )

    // make jest happy
    expect(true).toBe(true)
  })

  it("should have correct types for the IncmixComponent", () => {
    const Div: IncmixComponent<"div"> = (props) => <incmix.div {...props} />
    const CustomComp: IncmixComponent<typeof Comp> = (props) => (
      <incmix.div as={Comp} {...props} />
    )
    const CustomCompWithRequired = Incmix(CompWithRequired)

    const renderedCustomCompWithRequired = (
      <CustomCompWithRequired thisIsARequiredProp />
    )

    // make jest happy
    expect(true).toBe(true)
  })

  it("should have correct types for the IncmixComponent with additional props", () => {
    const AdditionalPropComp: IncmixComponent<
      "div",
      { additionalProp: boolean }
    > = ({ additionalProp, ...restProps }) => <incmix.div {...restProps} />

    const renderedAdditionPropComp = <AdditionalPropComp additionalProp />

    // make jest happy
    expect(true).toBe(true)
  })

  it("should have correct types for the IncmixComponent with optional additional props", () => {
    const OptionalAdditionalPropComp: IncmixComponent<
      "div",
      { additionalProp?: boolean }
    > = ({ additionalProp, ...restProps }) => <incmix.div {...restProps} />

    const renderedAdditionPropComp = <OptionalAdditionalPropComp />

    // make jest happy
    expect(true).toBe(true)
  })
})
