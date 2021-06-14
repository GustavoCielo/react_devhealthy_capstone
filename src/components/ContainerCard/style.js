import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => width};
  height: 100%;
  max-height: 360px;
  background-color: rgba(226, 182, 207, 0.46);
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-shrink: 0;

  h3 {
    text-align: center;
    color: #666666;
    margin-bottom: 5px;
  }
`;
