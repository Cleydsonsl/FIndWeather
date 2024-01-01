import { Text } from "../../atom";
import { Container } from "./styles";

interface Props {
  text?: string;
  secondary?: string;
  color?: string;
  secodaryColor?: string;
  type?: string;
  secondaryType?: string;
  fontSize?: number;
  secondaryFontSize?: number;
}

export function Title({text, secondary, color, secodaryColor, type, secondaryType, fontSize, secondaryFontSize}: Props) {
  return (
    <Container>
      <Text
        text={text}
        color={color}
        type={type}
        fontSize={fontSize}
      />
      {secondary && (
        <Text
          text={secondary}
          color={secodaryColor}
          type={secondaryType}
          fontSize={secondaryFontSize}
        />
      )}
    </Container>
  )
}
