import styled from "styled-components";

export const CardPassword = styled.div`
  width: 100%;
  height: auto;
  /* padding: 1rem; */
  background-color: #d6d6d6;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    span {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      h4 {
        font-size: 0.8rem;
        text-decoration: none;
      }
    }
  }
`;