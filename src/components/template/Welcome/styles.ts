import styled from 'styled-components/native';
import themes from '../../../themes';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${themes?.colors?.dark};
`;

export const Content = styled.View.attrs<any>({
  paddingHorizontal: 20
})`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;
