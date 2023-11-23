import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Welcome } from './src/components/template/Welcome';
import themes from './src/themes';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={themes}>
        <Welcome />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
