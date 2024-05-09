import { Button } from "@/components";
import { Close } from "@mui/icons-material";
import * as Styles from "./styles";

export function ModaLError() {
  return (
    <Styles.WrapperError>
      <Close htmlColor="#f7ad00" />
      <div className="ContentError">
        <h1>CNPJ ou senha incorretos</h1>
        <h2>Revise os dados informados e tente novamente.</h2>
      </div>
      <Button
        text="Tentar novamente"
        backgroundColor={"#f7ad00"}
        color={"#fff"}
        width="100%"
      />
    </Styles.WrapperError>
  );
}
