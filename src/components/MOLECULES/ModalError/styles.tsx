import styled from "styled-components";

export const WrapperError = styled.div`
  display: flex;
  width: 22rem;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
  background-color: #fff;
  border-radius: 0.125rem;

  svg {
    cursor: pointer;
  }

  .ContentError {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      color: #353d45;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    h2 {
      color: #555e6b;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
