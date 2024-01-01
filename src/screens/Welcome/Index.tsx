import React from 'react';
import {Welcome} from '../../components/template/Welcome';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any, any>
}

export const WelcomeScreen = ({navigation}: Props) => {
  return <Welcome navigation={navigation} />;
};
