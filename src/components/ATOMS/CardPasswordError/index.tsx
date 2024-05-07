import { Check, Close } from "@mui/icons-material";
import * as Styles from "./styles";

type TCardErro = {
  maiuscula: boolean;
  especial: boolean;
  numero: boolean;
  minimo: boolean;
};

export function CardPasswordError(props: TCardErro) {
  return (
    <Styles.CardPassword>
      <ul>
        <span>
          {props.maiuscula ? (
            <Check className="iconCheck" />
          ) : (
            <Close className="iconError" />
          )}
          <h4>1 Letra maiusculá</h4>
        </span>
        <span>
          {props.numero ? (
            <Check className="iconCheck" />
          ) : (
            <Close className="iconError" />
          )}

          <h4>1 Numeró</h4>
        </span>
        <span>
          {props.especial ? (
            <Check className="iconCheck" />
          ) : (
            <Close className="iconError" />
          )}

          <h4>1 Caracter especial</h4>
        </span>
        <span>
          {props.minimo ? (
            <Check className="iconCheck" />
          ) : (
            <Close className="iconError" />
          )}

          <h4>No minimo 6 caracteres</h4>
        </span>
      </ul>
    </Styles.CardPassword>
  );
}
