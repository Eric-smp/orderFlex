import styled from "styled-components";

export const CardInformation = styled.div`
  width: 25rem;
  height: auto;
  padding: 1.5rem 2rem;
  background-color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    display: flex;
    height: 2rem;
    width: 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #10c227;
  }

  .closeCard {
    top: 6px;
    right: 10px;
    position: absolute;
    background-color: transparent;
    cursor: pointer;
  }
  h2 {
    font-size: 1rem;
  }
`;
