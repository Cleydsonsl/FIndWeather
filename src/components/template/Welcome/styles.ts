import styled from 'styled-components/native';
import themes from '../../../themes';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${themes?.colors?.dark};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  padding-horizontal: 20px;
`;
