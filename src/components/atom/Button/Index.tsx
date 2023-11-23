import React from 'react';
import {Container, IButtonProps} from './styles';

export const Button = ({children, ...rest}: IButtonProps) => {
  return <Container {...rest}>{children}</Container>;
};
