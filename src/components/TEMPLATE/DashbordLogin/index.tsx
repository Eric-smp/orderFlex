import { Header, BodyLogin, Modal } from "@/components";
import * as Styles from "./styles";

export function DashbordLogin() {
  return (
    <Styles.WrapperLogin>
      <Modal />
      <Header />
      <BodyLogin />
    </Styles.WrapperLogin>
  );
}
