import React from 'react';
import {Text, Button as ButtonAtom} from '../../atom';

interface IButtonMoleculeProps {
  text?: string;
  fontSize?: number;
  color?: string | 'white' | 'dark';
  type?: 'bold' | 'medium' | 'small';
  align?: string | 'center' | 'left';
  width?: string | number;
  height?: string | number;
  alignItems?: string;
  background?: string;
  borderRadius?: string | number;
  borderColor?: string;
  borderWidth?: string | number;
  padding?: string | number;
  onPress?: Function;
}

export const Button = ({
  text,
  color,
  align,
  fontSize,
  type,
  width,
  height,
  background,
  borderRadius,
  borderColor,
  borderWidth,
  padding,
  onPress
}: IButtonMoleculeProps) => {
  return (
    <ButtonAtom
      width={width}
      height={height}
      background={background}
      borderRadius={borderRadius}
      borderColor={borderColor}
      borderWidth={borderWidth}
      padding={padding}
      onPress={onPress}
    >
      <Text
        text={text}
        color={color}
        align={align}
        fontSize={fontSize}
        type={type}
      />
    </ButtonAtom>
  );
};
