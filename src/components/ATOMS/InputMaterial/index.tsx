import { TInputMaterial } from "@/types";
import * as Styles from "./styles";

export function InputMaterial({
  placeholder,
  type,
  label,
  id,
  autoComplete,
  onChange,
  value,
  register,
}: TInputMaterial) {
  return (
    <Styles.DivElement>
      <Styles.LabelInput htmlFor={id}>
        <h5>{label}</h5>
      </Styles.LabelInput>
      <Styles.InputElement
        label=""
        placeholder={placeholder}
        type={type}
        id={id}
        autoComplete={autoComplete}
        name={id}
        onChange={onChange}
        value={value}
        register={register}
        {...register}
      />
    </Styles.DivElement>
  );
}
