/* eslint-disable react/jsx-no-undef */

import { ModalCreateLogin } from "@/components";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";

export function Modal() {
  const { modalType, isModalOpen } = useGlobal();

  const modalsList = [<ModalCreateLogin key="0" />];

  return (
    <Styles.ModalContainer
      backgroundModalColor="rgba(0, 80, 242, 0.7)"
      isOpen={isModalOpen}
    >
      {modalsList[modalType]}
    </Styles.ModalContainer>
  );
}
