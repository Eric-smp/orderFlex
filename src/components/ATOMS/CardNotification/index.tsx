import { Check, Close } from "@mui/icons-material";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";

export function CardNotification() {
  const { notification, setNotification } = useGlobal();
  return (
    <>
      {notification ? (
        <Styles.CardInformation>
          <span>
            <Check htmlColor="#fff" />
          </span>

          <h2>Conta criada com sucesso</h2>
        </Styles.CardInformation>
      ) : null}
    </>
  );
}
