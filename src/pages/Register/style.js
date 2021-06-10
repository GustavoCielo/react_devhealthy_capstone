import styled from "styled-components";
import bg from "../../assets/img/bg.svg";

export const BackgroundContainer = styled.div`
  @media (min-width: 768px) {
    background: url(${bg}) no-repeat center;
    background-size: contain;
  }
  width: 100%;
  height: 80vh;
`;

export const MainContainer = styled.div`
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  form {
    p {
      font-family: "Roboto", sans-serif;
      font-size: 0.7rem;
    }
    span {
      font-weight: 700;
      font-size: 0.7rem;
    }
  }
`;
