import styled from "styled-components";

export const ContentBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 1rem;
  display: flex;
  gap: 1rem;

  @media only screen and (min-width: 1440px) {
    max-width: 85rem;
    margin: auto;
    border-right: 1px solid #f7ad00;
    border-left: 1px solid #f7ad00;
  }

  .saveOrders {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
`;
