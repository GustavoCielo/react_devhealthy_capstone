import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 2,
    color: "#fff",
  },
}));

export const HabitCardStyled = styled.div`
  background-color: rgba(226, 182, 207, 0.47);
  width: 300px;
  height: 230px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  p {
    flex-grow: 1;
    text-align: center;
    padding-left: 8px;
    font-weight: bold;
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

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 5px;

  label {
    margin: 0 0 0 auto;
  }

  svg {
    font-size: 3rem;
  }
`;

export const ProgressContainer = styled.div`
  width: 100%;
  margin: 0 10px;

  p {
    span {
      font-size: 16px;
      font-style: italic;
      font-weight: 500;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  figure {
    width: 40px;
    margin: 0;

    img {
      width: 100%;
    }
  }
`;

export const BodyContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
