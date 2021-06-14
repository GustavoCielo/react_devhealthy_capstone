import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
`;

export const ContainerContent = styled.div`
  height: 100%;
  width: 70%;
  margin: 0 auto;
  padding: 16px 8px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
