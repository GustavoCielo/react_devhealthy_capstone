import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const InternContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px;

  figure {
    width: 100%;

    img {
      width: 100%;
    }
  }
`;

export const ContainerLogo = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding-left: 50px;

  figure {
    width: 30%;

    margin: 0;

    img {
      width: 100%;
    }

    :nth-child(2) {
      width: 90%;
    }
  }

  figure:first-child {
    transform: translateY(30px);
  }

  div {
    h3 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`;

export const ContainerControlers = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  Button {
    margin-top: 40px;
  }
`;
