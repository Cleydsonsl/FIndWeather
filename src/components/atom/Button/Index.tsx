import React from 'react';
import {Container, IButtonProps} from './styles';

export const Button = ({children, onPress, ...rest}: IButtonProps) => {
  return <Container {...rest} onPress={onPress}>{children}</Container>;
};
