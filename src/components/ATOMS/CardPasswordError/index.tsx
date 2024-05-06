import * as Styles from "./styles";

export function CardPasswordError() {
  return (
    <Styles.CardPassword>
      <ul>
        <span>
          <h4>1 Letra maiusculá</h4>
        </span>
        <span>
          <h4>1 Numeró</h4>
        </span>
        <span>
          <h4>1 Caracter especial</h4>
        </span>
        <span>
          <h4>No minimo 6 caracteres</h4>
        </span>
      </ul>
    </Styles.CardPassword>
  );
}
