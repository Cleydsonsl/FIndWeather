import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { ReactNode } from "react";
import themes from "../../../themes";

export interface IButtonProps {
  chindren?: ReactNode;
  width?: string | number;
  height?: string | number;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  padding?: string;
}

export const Container = styled(RectButton)<IButtonProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background: ${props => props.background || 'transparent'};
  border-radius: ${props => props.borderRadius || 'none'};
  border-color: ${props => props.borderColor || themes?.colors?.gray_100};
  border-width: ${props => props.borderWidth || 'none'};
  padding: ${props => props.padding || 'none'};
`;
