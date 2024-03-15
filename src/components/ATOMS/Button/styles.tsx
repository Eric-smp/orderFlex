import { TButton } from "@/types";
import styled from "styled-components";

export const ButtonElement = styled.button<TButton>`
  width: ${({ width }) => width || "15rem"};
  height: ${({ height }) => height || " 2.5rem"};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;

  h3 {
    color: ${({ color }) => color};
  }

  :hover {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: none;
    outline: none;
    height: 100%;
    width: 100%;
    /* background-color: ${({ color }) => color};
    color: ${({ backgroundColor }) => backgroundColor};
    border: 2px solid ${({ backgroundColor }) => backgroundColor}; */
  }
`;

//#f7ad00
//#f5f2f2
