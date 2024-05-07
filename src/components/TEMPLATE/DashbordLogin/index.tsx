import { Header, BodyLogin, Modal, CardNotification } from "@/components";
import * as Styles from "./styles";

export function DashbordLogin() {
  return (
    <Styles.WrapperLogin>
      <Modal />
      <Header />
      <BodyLogin />
      <CardNotification />
    </Styles.WrapperLogin>
  );
}
