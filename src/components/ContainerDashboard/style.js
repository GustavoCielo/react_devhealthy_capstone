import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    display: flex;
    justify-content: center;
    overflow: hidden;
`

export const ContainerContent = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 768px){
        width: 100%;
    }

    @media(max-width: 600px){
        flex-direction: column;
    }
`