import styled from 'styled-components/native';
import themes from "../../../themes";

export interface ITextProps {
  text?: string;
  fontSize?: number;
  color?: string | 'white' | 'dark';
  type?: 'bold' | 'medium' | 'small';
  align?: string | 'center' | 'left';
}

export const Container = styled.Text<ITextProps>`
  color: ${props =>
    props.color || props.color === 'white'
      ? themes.colors.white
      : props.color === 'dark'
      ? themes?.colors?.dark
      : '#000'};
  font-size: ${props => props.fontSize || 12};
  font-weight: ${props =>
    props.type === 'bold' ? 700 : props.type === 'medium' ? 500 : 400};
  text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
`;
