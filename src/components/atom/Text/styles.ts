import styled from 'styled-components/native';
import themes from "../../../themes";

export interface ITextProps {
  text?: string;
  fontSize?: number;
  color?: string | 'white' | 'dark';
  type?: 'bold' | 'semiBold' | 'small';
  align?: string | 'center' | 'left';
  textDecoration?: string
}

export const Container = styled.Text<ITextProps>`
  color: ${props => props.color || '#000'};
  font-size: ${props => props.fontSize || 12}px;
  font-weight: ${props =>
    props.type === 'bold' ? 700 : props.type === 'semiBold' ? 600 : 400};
  text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
  text-decoration-line: ${props => (props.textDecoration || 'none')};
`;
