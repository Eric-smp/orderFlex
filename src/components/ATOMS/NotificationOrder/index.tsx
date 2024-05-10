import { Check, Close } from "@mui/icons-material";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";

export function NotificationOrder() {
  const { notificationOrder, setNotification } = useGlobal();
  return (
    <>
      {notificationOrder ? (
        <Styles.CardInformation>
          <span>
            <Check htmlColor="#fff" />
          </span>

          <h2>Pedido criado com sucesso</h2>
        </Styles.CardInformation>
      ) : null}
    </>
  );
}
