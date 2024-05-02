import { Header, BodyHome, Modal } from "@/components";
import * as Styles from "./styles";

export function DrashbordHome() {
  return (
    <Styles.Wrapper>
      <Modal />
      <Header isNavegation />
      <BodyHome />
    </Styles.Wrapper>
  );
}
