import * as React from "react"
import { motion } from "framer-motion"
import {
  Incmix,
  ThemeProvider,
  useStyleConfig,
  HTMLIncmixProps,
  DarkMode,
} from "../src"

export default {
  title: "System / Core",
}

const MotionBox = motion(incmix.div)

export const WithFramerMotion = () => (
  <MotionBox
    mt="40px"
    w="40px"
    h="40px"
    bg="red.200"
    ml="60px"
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
)

export const ApplyProp = () => (
  <Incmix.p>
    This is a paragraph, but apply styles from{" "}
    <Incmix.code fontFamily="mono">styles.h1</Incmix.code>
  </Incmix.p>
)

export const withHeading = () => (
  <div>
    <Incmix.h1
      fontSize={["50px", "80px", "100px"]}
      color="tomato"
      sx={{ color: "teal.500" }}
    >
      Welcome
    </Incmix.h1>
  </div>
)

export const withTextStyles = () => {
  return (
    <ThemeProvider
      theme={{
        textStyles: {
          h1: {
            fontSize: ["48px", "72px"],
            fontWeight: "bold",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
          },
          h2: {
            fontSize: ["36px", "48px"],
            fontWeight: "light",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
          },
        },
      }}
    >
      <Incmix.h1 textStyle="h2" color="red.300">
        Welcome
      </Incmix.h1>
      <Incmix.p textStyle="h1" color="green.200">
        Welcome text
      </Incmix.p>
    </ThemeProvider>
  )
}

export const WithGradient = () => (
  <>
    <incmix.div
      bgGradient="linear(to-r, pink.300, blue.500)"
      w="500px"
      h="64px"
    />
    <Incmix.span
      bgGradient="linear(to-r, red.200, papayawhip)"
      bgClip="text"
      fontSize="7xl"
      fontWeight="extrabold"
    >
      Welcome to Incmix UI
    </Incmix.span>
  </>
)

export const WithRgbGradient = () => (
  <>
    <incmix.div
      bgGradient="linear(to-r, rgb(0,0,0), rgb(230,230,230))"
      w="500px"
      h="64px"
    />
  </>
)

export const WithLayerStyle = () => (
  <ThemeProvider
    cssVarsRoot="#root"
    theme={{
      space: { 2: "4px" },
      layerStyles: {
        base: {
          bg: "pink",
          color: "red",
        },
      },
      textStyles: {
        caps: {
          textTransform: "uppercase",
          fontWeight: "bold",
        },
      },
    }}
  >
    <incmix.div layerStyle="base" textStyle="caps" color="white" px="2">
      Welcome
    </incmix.div>
  </ThemeProvider>
)

const Div = ({ children }: HTMLIncmixProps<"div">) => {
  const styles = useStyleConfig("Div")
  return <incmix.div sx={styles}>{children}</incmix.div>
}

export const WithLayerStyleInComponentTheme = () => (
  <ThemeProvider
    theme={{
      textStyles: {
        caps: {
          textTransform: "uppercase",
          fontWeight: "bold",
        },
      },
      components: {
        Div: {
          baseStyle: {
            textStyle: "caps",
            bg: "red",
          },
        },
      },
    }}
  >
    <Div>Welcome</Div>
  </ThemeProvider>
)

export const WithCSSVarToken = () => {
  return (
    <incmix.div
      sx={{
        "--banner-height": "sizes.md",
        ".banner": {
          height: "var(--banner-height)",
          bg: "red.200",
        },
      }}
    >
      <div className="banner">banner</div>
    </incmix.div>
  )
}

export const WithSemanticTokens = () => {
  return (
    <div>
      <Incmix.p color="semantic">I am in the default color mode</Incmix.p>
      <div data-theme="light">
        <Incmix.p color="semantic">I am forced to light mode (red)</Incmix.p>
      </div>
      <div data-theme="dark">
        <Incmix.p color="semantic">I am forced to dark mode (blue)</Incmix.p>
        <div data-theme="light">
          <Incmix.p pl="4" color="semantic">
            I am nested and forced to light mode (red)
          </Incmix.p>
        </div>
      </div>
    </div>
  )
}

export const WithColorMode = () => {
  const styles = useStyleConfig("Badge", {
    variant: "solid",
    colorScheme: "blue",
  })
  return (
    <>
      <Incmix.span>Not forced</Incmix.span>
      <DarkMode>
        <incmix.div bg="gray.800" padding="40px">
          <Incmix.p color="Incmix-body-text">Forced color mode</Incmix.p>
          <Incmix.span __css={styles}>Badge</Incmix.span>
        </incmix.div>
      </DarkMode>
    </>
  )
}
