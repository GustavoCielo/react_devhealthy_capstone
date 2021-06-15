import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: rgba(226, 182, 207, 0.47);

    div {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
    }
`

function blinkingEffect() {
  return keyframes`
  60% {
    opacity: 0;
  }
  `;
}

export const ImageIcon = styled.img`
  height: 200px;
  animation: ${blinkingEffect} 1.6s linear infinite;
`

