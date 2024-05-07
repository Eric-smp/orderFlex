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
  error,
  messageError,
  prefixIcon,
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
        error={error}
        messageError={messageError}
        {...register}
      />
      <span className="prefixIcon">{prefixIcon}</span>
      {error ? (
        <Styles.MessageError>
          <p>{messageError}</p>
        </Styles.MessageError>
      ) : null}
    </Styles.DivElement>
  );
}
