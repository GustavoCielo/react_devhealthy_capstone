import styled from "styled-components";
import p404 from "../../assets/img/p404.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${p404}) ${({ move }) => move.x}px ${({ move }) => move.y}px,
    #8ecc8e;
`;

export const Content = styled.div`
  max-width: 600px;
  text-align: center;

  h2 {
    font-size: 18vw;
    color: #fafafa;
    line-height: 1em;
    margin: 0;
  }

  h4 {
    font-size: 1.5em;
    color: #666;
    background: #fafafa;
    font-weight: 500;
    padding: 10px 20px;
    display: inline-block;
  }

  p {
    color: rgba(0, 0, 0, 0.9);
    font-size: 1.2em;
    max-width: 90%;
    margin: 20px auto;
  }
`;
