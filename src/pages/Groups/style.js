import styled from "styled-components";

export const Container = styled.div`
  height: 65%;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  button {
    height: 24px;
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActiviesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const MemberContainer = styled.div`
  min-width: 140px;
  max-width: 33%;
  background: rgba(226, 182, 207, 0.47);
  border-radius: 5px;
  padding: 5px 0;
  h2 {
    text-align: center;
  }
  li {
    margin-left: 10px;
  }
`;

export const GoalsContainer = styled.div`
  background: rgba(226, 182, 207, 0.47);
  border-radius: 5px;
  min-width: 135px;
  max-width: 33%;
  text-align: center;
`;

export const ContainerDescription = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  width: 200px;
  padding: 4px 4px 20px 4px;
  overflow: hidden scroll;
  position: relative;

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
  position: absolute;
  top: 0;
  background-color: #e9c9d9;
  border-radius: 10px;

  &:hover {
    background-color: #e2b6cf;
  }
`;

export const GroupCardContainer = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  img {
    width: 32px;
  }

  img:last-child {
    width: 16px;
    cursor: pointer;
  }

  input[type="checkbox"] {
    display: none;
  }
`;
