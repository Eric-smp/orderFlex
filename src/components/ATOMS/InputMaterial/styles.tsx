import styled from "styled-components";
import { TInputMaterial } from "@/types";
interface TLabel {
  backgroundLabel?: string;
}
export const DivElement = styled.div`
  width: auto;
  height: 3.5rem;
  position: relative;
`;

export const InputElement = styled.input<TInputMaterial>`
  width: 15rem;
  height: 2.5rem;
  padding: 1rem;
  outline: none;
  border: 2px solid ${({ error }) => (error ? "red" : "#f7ad00")};
  border-radius: 5px;
  background-color: transparent;
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

export const MessageError = styled.div`
  position: absolute;
  color: red;
  font-size: 0.9rem;
  right: 0;
`;
