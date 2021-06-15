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

  @media (max-width: 767px) {
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
  }
`;

export const InternContainer = styled.div`
  width: 530px;
  max-height: 350px;

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
