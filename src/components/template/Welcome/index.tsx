import React from 'react';
import Thunder from '../../../assets/cloud-and-thunder.svg';
import {Text} from '../../atom/Text';
import {Button, BoxText} from '../../molecule';
import {Container, Content} from './styles';
import themes from '../../../themes/index';

export const Welcome = () => {
  return (
    <Container>
      <Content>
        <Thunder width={'61%'} height={'26%'} />
        <Text
          text={'Descubra o Clima \n na sua cidade'}
          fontSize={33}
          type="bold"
          color="white"
          align="center"
        />
        <BoxText
          primary='Com o '
          secondary='Find'
          terceary='Weather '
          quarter='nunca'
          quint='ficou tão fácil ter a previsão do'
          sext='tempo na palma da sua mão'
        />
        <Button
          text="Iniciar"
          padding={15}
          borderWidth={1}
          borderRadius={18}
          fontSize={22}
          borderColor={themes?.colors?.gray_300}
          background={themes?.colors?.dark_300}
          color={themes?.colors?.white}
        />
      </Content>
    </Container>
  );
};
