import styled from 'styled-components/native';

export interface ITextProps {
  text?: string;
  fontSize?: number;
  color?: string;
}

export const Container = styled.Text<ITextProps>`
  color: ${props => props.color || '#000'};
  font-size: ${props => props.fontSize || 12};
`;
