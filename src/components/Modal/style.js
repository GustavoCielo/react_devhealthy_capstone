import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;

  div {
    padding: 16px;
    display: flex;
    flex-direction: column;
    background-color: #e2b6cf;
    position: relative;
    border-radius: 12px;

    button:first-child {
      margin-left: auto;
    }
  }
`;
