import { TInputMaterial } from "@/types";
import * as Styles from "./styles";

export function InputMaterial({
  placeholder,
  type,
  label,
  id,
  isAutoComplete,
}: TInputMaterial) {
  return (
    <Styles.DivElement>
      <Styles.LabelInput htmlFor={id}>
        <h5>{label}</h5>
      </Styles.LabelInput>
      <Styles.InputElement
        placeholder={placeholder}
        type={type}
        id={id}
        autoComplete="off"
        name={id}
      />
    </Styles.DivElement>
  );
}
