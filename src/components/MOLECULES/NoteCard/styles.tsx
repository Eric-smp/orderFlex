import { MouseEventHandler } from "react";
import styled from "styled-components";
type TClickModal = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export const NoteCard = styled.div<TClickModal>`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5ae05;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  h2 {
    font-size: 2rem;
    font-weight: 900;
    color: #fff;
  }
`;
