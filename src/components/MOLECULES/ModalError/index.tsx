import { Button } from "@/components";
import { Close } from "@mui/icons-material";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";

export function ModaLError() {
  const { setIsModalOpen } = useGlobal();
  return (
    <Styles.WrapperError>
      <Close htmlColor="#f7ad00" onClick={() => setIsModalOpen("hidden")} />
      <div className="ContentError">
        <h1>CNPJ ou senha incorretos</h1>
        <h2>Revise os dados informados e tente novamente.</h2>
      </div>
      <Button
        text="Tentar novamente"
        backgroundColor={"#f7ad00"}
        color={"#fff"}
        width="100%"
        onClick={() => setIsModalOpen("hidden")}
      />
    </Styles.WrapperError>
  );
}
