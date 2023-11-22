import React from 'react';
import { SafeAreaView, Text } from "react-native";
import theme from '../../../themes/index';
import Thunder from '../../../assets/cloud-and-thunder.svg';

export const Welcome = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.dark,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>

      <Thunder width={100} height={100} />

      <Text
        style={{
          textAlign: 'center',
          color: theme.colors.white,
          fontSize: 33,
          fontWeight: '600',
        }}
      >
        Descubra o Clima {'\n'} na sua cidade
      </Text>
      <Text
        style={{
          color: theme.colors.gray_100,
          fontSize: 22,
          textAlign: 'center',

        }}
      >
        Com o FindWeather nunca {'\n'}
        ficou tão fácil ter a previsão do {'\n'}
        tempo na palma da sua mão.
      </Text>
    </SafeAreaView>
  );
};
