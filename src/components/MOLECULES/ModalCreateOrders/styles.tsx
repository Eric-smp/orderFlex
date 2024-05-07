import styled from "styled-components";

export const ContentModal = styled.div`
  width: 25rem;
  height: auto;
  padding: 2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      svg {
        cursor: pointer;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .inputOrder {
      display: flex;
      align-items: center;
      gap: 1rem;

      .addOrder {
        width: 30px;
        height: 30px;
        background-color: #f7ad00;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    footer {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
  }
`;
