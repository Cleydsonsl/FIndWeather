import themes from "../../../themes";
import { Title } from "../../molecule";
import { Container } from "./styles";
import Earth from '../../../assets/climate-change.svg'
import { ButtonText } from "../../organisms";

interface PropsEmpty {
  text: string;
}

export function EmpityScreen() {
  return (
    <Container>
      <Title
        text="Find"
        color={themes.colors.white}
        type="semiBold"
        secondary="Weather"
        secodaryColor={themes.colors.white}
        secondaryType="bold"
        fontSize={32}
        secondaryFontSize={32}
      />

      <Earth width={'67%'} height={'32%'}/>

      <ButtonText
        text={`Selecione aqui um local e \nencontre o clima em tempo real`}
        color={themes.colors.gray_100}
        onPress={() => {}}
        type=""
        fontSize={22}
        alignItems="center"
        align="center"
        textDecoration="underline"
        padding="0"
      />

    </Container>
  )
}
