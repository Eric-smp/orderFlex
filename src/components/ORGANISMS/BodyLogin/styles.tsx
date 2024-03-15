import styled from "styled-components";

export const ContentBodyLogin = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 1rem;
  background-color: #c7c7c7;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .ContentIntroductionProduct {
    display: none;
  }

  @media only screen and (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 3rem 5rem 3rem 5rem;
    .ContentIntroductionProduct {
      height: 100%;
      width: 50%;
      background-color: #f7ad00;
      border-radius: 15px;
      display: flex;
      align-items: center;
      padding: 3rem;
      color: #f5f2f2;
      .contentCard {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        h1 {
          font-size: 1.5rem;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
        }
        h2 {
          font-size: 1.25rem;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;

          a {
            cursor: pointer;
            font-style: italic;
            text-decoration: underline;
            color: #551a8b;
          }
        }
      }
    }
  }
`;
