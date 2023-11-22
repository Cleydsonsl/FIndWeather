import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Welcome } from './src/components/template/Welcome';
import themes from './src/themes';

export const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <Welcome  />
    </ThemeProvider>
  );
};
