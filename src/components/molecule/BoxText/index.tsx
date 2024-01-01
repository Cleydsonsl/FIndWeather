import React from 'react';
import {Text as TextAtom} from '../../atom';
import {Container, Content} from './styles';
import themes from '../../../themes';

interface IBoxText {
  primary: string;
  secondary: string;
  terceary: string;
  quarter: string;
  quint: string;
  sext: string;
}

export function BoxText({primary, secondary, terceary, quarter, quint, sext}: IBoxText) {
  return (
    <Container>
      <Content>
        <TextAtom
          text={primary}
          fontSize={22}
          color={themes?.colors?.gray_100}
        />
        <TextAtom
          text={secondary}
          fontSize={22}
          color={themes?.colors?.gray_100}
          type="semiBold"
        />
        <TextAtom
          text={terceary}
          fontSize={22}
          color={themes?.colors?.gray_100}
          type="bold"
        />
        <TextAtom text={quarter} fontSize={22} color={themes?.colors?.gray_100} />
      </Content>
      <TextAtom
        text={quint}
        fontSize={22}
        color={themes?.colors?.gray_100}
      />
      <TextAtom
        text={sext}
        fontSize={22}
        color={themes?.colors?.gray_100}
      />
    </Container>
  );
};
