module.exports = {
  App: `import { useFormik } from "formik";
import { Input, Button } from "@incmix-ui/react";

export default function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='email'>Email Address</label>
      <Input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <Button type='submit'>Submit</Button>
    </form>
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
