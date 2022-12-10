import React from 'react';
import { render } from '@testing-library/react';
import { IncmixProvider, theme } from '@incmix-ui/react';

const AllProviders = ({ children }) => (
  <IncmixProvider theme={theme}>{children}</IncmixProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
