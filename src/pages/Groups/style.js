import styled from "styled-components";

export const Container = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  width: 200px;
  padding: 4px 4px 20px 4px;
  overflow: hidden scroll;
  position: relative;
  //transition: scale

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

export const ButtonStyle = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #fafafa;
  font-weight: bolder;
  display: flex;
  align-items: center;
  position: fixed;
  top: 119px;
  background-color: #e9c9d9;
  border-radius: 10px;

  &:hover {
    background-color: #e2b6cf;
  }
`;
