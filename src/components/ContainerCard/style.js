import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => width};
  height: 80%;
  background-color: rgba(226, 182, 207, 0.46);
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    color: #666666;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    width: 80%;
    max-height: 300px;
    margin-bottom: 20px;
  }
`;
