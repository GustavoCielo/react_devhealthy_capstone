import styled from "styled-components";

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
  justify-content: center;
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
