import React from 'react';
import { ThemeProvider } from 'styled-components/native';
// import { Welcome } from './src/components/template/Welcome';
import themes from './src/themes';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Router } from "./src/routes";

export const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={themes}>
        <Router />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
