import { Header, BodyHome, Modal, NotificationOrder } from "@/components";
import * as Styles from "./styles";

export function DrashbordHome() {
  return (
    <Styles.Wrapper>
      <Modal />
      <Header isNavegation />
      <BodyHome />
      <NotificationOrder />
    </Styles.Wrapper>
  );
}
