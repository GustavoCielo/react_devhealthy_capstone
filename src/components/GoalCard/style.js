import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  p {
    flex-grow: 1;
    font-weight: bold;
    text-align: center;
    line-break: loose;
  }
`;

export const Ball = styled.div`
  background-color: ${(props) =>
    props.difficulty === "Fácil"
      ? "#61d261"
      : props.difficulty === "Média"
      ? "#eaea31"
      : props.difficulty === "Difícil"
      ? "orange"
      : "red"};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    span {
      font-size: 16px;
      font-style: italic;
      font-weight: 500;
    }
  }
`;
