import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 2,
    color: "#fff",
  },
}));

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 3rem;
  }
`;

export const ContainerGroups = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #fafafa;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e2b6cf;
  }
`;

export const InternContainer = styled.div`
  .Header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;

    figure {
      width: 60px;

      margin-right: 10px;
      img {
        width: 100%;
      }
    }

    h4 {
      font-size: 1.3rem;
      width: 80%;
      text-align: center;
    }
  }

  .Body {
    padding: 5px;
    span {
      margin-right: 5px;
      font-weight: 600;
    }
  }

  Button {
    width: 50px;
    margin: 0 auto;
  }
`;

export const ContainerControlers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    li {
      width: 55px;
      height: 40px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      margin: 2px;
      background-color: #e9c9d9;
      font-size: 0.8rem;
      padding: 0;
      text-align: center;

      :hover {
        background-color: #8ecc8e;
      }

      a {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        color: #938e8e;

        display: flex;
        justify-content: center;
        align-items: center;

        :focus {
          background-color: #8ecc8e;
        }
      }
    }
  }
`;

export const InputStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9c9d9;
  padding: 5px;
  border-radius: 10px;
  font-size: 1rem;
  color: white;
  margin-bottom: 10px;

  icon {
    color: white;
  }

  input {
    background-color: transparent;
    color: #5c5959;
    border: none;
    padding: 5px;
    outline: none;
    font-size: 1rem;
  }
`;

export const ButtonCreateGroup = styled.div`
  background-color: red;
  width: 150px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: #8ecc8e;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  -webkit-box-shadow: 4px 3px 23px 4px rgba(0, 0, 0, 0.37);
  box-shadow: 4px 3px 23px 4px rgba(0, 0, 0, 0.37);

  span {
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Container = styled.div`
  height: 90%;
`;
