import styled from "styled-components";

export const WrapperModal = styled.div`
  width: 21rem;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  border-radius: 10px;
  background-color: #f5f2f2;

  .headerModal {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      svg {
        cursor: pointer;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 25rem;
    height: auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border-radius: 10px;
    background-color: #f5f2f2;

    .headerModal {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        svg {
          cursor: pointer;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;
