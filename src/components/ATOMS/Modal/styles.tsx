import { ModalProps } from "@/types";
import styled from "styled-components";

export const ModalContainer = styled.div<ModalProps>`
  height: 100vh;
  width: 100vw;
  z-index: 50;
  position: fixed;
  display: ${({ isOpen }) => (isOpen === "visible" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1rem);
  background-color: rgba(247, 173, 0, 0.355);
  overflow-y: hidden;
  overflow-x: hidden;

  @media only screen and (max-width: 768px) {
    .closeIcon {
      top: -2rem;
      right: 45%;
    }
  }
`;
