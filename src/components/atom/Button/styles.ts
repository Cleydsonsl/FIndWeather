import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {ReactNode} from 'react';
import themes from '../../../themes';

export interface IButtonProps {
  children?: ReactNode;
  width?: string | number;
  height?: string | number;
  alignItems?: string;
  background?: string;
  borderRadius?: string | number;
  borderColor?: string;
  borderWidth?: string | number;
  padding?: string | number | any;
  onPress?: Function;
}

export const Container = styled(RectButton)<IButtonProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  align-items: ${props => props.alignItems || 'center'};
  background: ${props => props.background || 'transparent'};
  border-radius: ${props => props.borderRadius || 0}px;
  border-color: ${props => props.borderColor || themes?.colors?.gray_100};
  border-width: ${props => props.borderWidth || 0}px;
  padding: ${props => props.padding || 0}px;
`;
