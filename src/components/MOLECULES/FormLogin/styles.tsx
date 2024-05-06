import styled from "styled-components";

export const ContentForm = styled.div`
  width: 21rem;
  height: 20rem;
  border: 2px solid #f7ad00;
  border-radius: 10px;
  padding: 1rem;
  background-color: #f5f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  form {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .footerCarLogin {
    margin-top: 1rem;
    h3 {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      font-size: 0.9rem;
      font-weight: normal;

      p {
        font-style: italic;
        text-decoration: underline;
        color: #551a8b;
      }
    }
  }

  .dialogContent {
    background-color: red;
  }
  @media only screen and (min-width: 1024px) {
    width: 25rem;
    height: 25rem;
    padding: 3rem 3rem;
  }
`;
