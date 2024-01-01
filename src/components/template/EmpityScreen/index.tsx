import themes from "../../../themes";
import { Title } from "../../molecule";
import { Container } from "./styles";

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

    </Container>
  )
}
