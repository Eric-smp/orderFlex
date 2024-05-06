import styled from "styled-components";
import { TMaterialInputMask } from "@/types";

interface TLabel {
  backgroundLabel?: string;
}
export const ElementDivInput = styled.div<TMaterialInputMask>`
  position: relative;

  width: ${({ width }) => width};
  height: 3.5rem;

  input {
    outline: none;
    padding: 0.5rem 1rem;
    width: ${({ width }) => width || "15rem"};
    height: ${({ heigth }) => heigth || "2.5rem"};
    border-radius: 10px;
    border: 2px solid #f7ad00;
    border-radius: 5px;
    background-color: ${({ backgroundColor }) =>
      backgroundColor || "transparent"};

    outline: none;
  }
`;

export const LabelInput = styled.label<TLabel>`
  position: absolute;
  font-size: 1rem;
  left: 0.8rem;
  top: -0.5rem;
  background-color: ${({ backgroundLabel }) => backgroundLabel || "#f5f2f2"};
  display: flex;
  align-items: center;
  padding: 0rem 0.5rem;
  letter-spacing: 0.8px;
  color: black;
`;
