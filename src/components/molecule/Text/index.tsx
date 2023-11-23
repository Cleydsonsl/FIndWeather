import React from 'react';
import {Text as TextAtom} from '../../atom';
import {Container, Content} from './styles';
import themes from '../../../themes';

export const Text = () => {
  return (
    <Container>
      <Content>
        <TextAtom
          text="Com o "
          fontSize={22}
          color={themes?.colors?.gray_100}
        />
        <TextAtom
          text="Find"
          fontSize={22}
          color={themes?.colors?.gray_100}
          type="semiBold"
        />
        <TextAtom
          text="Weather "
          fontSize={22}
          color={themes?.colors?.gray_100}
          type="bold"
        />
        <TextAtom text="nunca" fontSize={22} color={themes?.colors?.gray_100} />
      </Content>
      <TextAtom
        text="ficou tão fácil ter a previsão do"
        fontSize={22}
        color={themes?.colors?.gray_100}
      />
      <TextAtom
        text="tempo na palma da sua mão"
        fontSize={22}
        color={themes?.colors?.gray_100}
      />
    </Container>
  );
};
