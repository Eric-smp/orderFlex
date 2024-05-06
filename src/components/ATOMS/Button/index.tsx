import { TButton } from "@/types";
import * as Styles from "./styles";

export function Button({
  text,
  type,
  backgroundColor,
  color,
  height,
  width,
  onClick,
  disabled,
}: TButton) {
  return (
    <Styles.ButtonElement
      type={type}
      text={text}
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
      width={width}
      height={height}
      disabled={disabled}
    >
      <h3>{text}</h3>
    </Styles.ButtonElement>
  );
}
