import React from 'react';
import { Container, ITextProps } from "./styles";

export const Text = ({text, ...rest}: ITextProps) => {
  return <Container {...rest}>{text}</Container>;
};
