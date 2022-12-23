module.exports = {
  App: `import { Container, incmix, shouldForwardProp } from '@incmix-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const IncmixBox = incmix(motion.div, {
  /**
   * Allow motion props and non-Incmix props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function App() {
  return (
    <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
      <IncmixBox
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        padding="2"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
      >
        I'm Dizzy!
      </IncmixBox>
    </Container>
  )
}`,
  Index: `import * as React from "react";
import { createRoot } from "react-dom/client";
import { IncmixProvider } from "@incmix-ui/react";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <IncmixProvider>
    <App />
  </IncmixProvider>
);`,
}
