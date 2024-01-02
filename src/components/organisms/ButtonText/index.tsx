import { Button } from "../../molecule";

interface IButtonTextProps {
  alignItems?: string;
  align?: string;
  fontSize?: number;
  text: string;
  onPress: Function;
  color: string;
  type: string;
  textDecoration?: string;
  padding?: string | number;
}

export function ButtonText({text, onPress, color, alignItems, align, fontSize, type, textDecoration, padding}: IButtonTextProps) {
  return(
    <Button
      background="transparent"
      align={align}
      alignItems={alignItems}
      text={text}
      onPress={onPress}
      color={color}
      fontSize={fontSize}
      textDecoration={textDecoration}
      type={type}
      padding={padding}
    />
  )
}
