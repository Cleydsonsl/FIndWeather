import React from 'react';
import {Container, IButtonProps} from './styles';

export const Button = ({chindren, ...rest}: IButtonProps) => {
  return <Container {...rest}>{chindren}</Container>;
};
