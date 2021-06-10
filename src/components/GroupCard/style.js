import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 200px;
  padding: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  figure {
    width: 30%;
    max-width: 30px;
    height: 30px;

    img {
      width: 100%;
    }
  }

  h4 {
    min-width: 70%;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
