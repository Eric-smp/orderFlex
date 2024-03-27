import styled from "styled-components";
import { TInputMaterial } from "@/types";
export const DivElement = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;

export const InputElement = styled.input<TInputMaterial>`
  width: 15rem;
  height: 2.5rem;
  padding: 1rem;
  outline: none;
  border: 2px solid #f7ad00;
  border-radius: 5px;
  background-color: transparent;
`;

export const LabelInput = styled.label`
  position: absolute;
  margin-left: 1rem;
  bottom: 2rem;
  background-color: #f5f2f2;
  padding: 0rem 0.2rem;
`;
