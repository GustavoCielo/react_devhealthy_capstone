import styled from 'styled-components';

export const HabitCardStyled = styled.div`
    background-color: rgba(226, 182, 207, 0.47);
    width: 300px;
    height:230px;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
`

export const HeaderContainer = styled.div`
    display:flex;
    align-items: center;
    width: 100%;

    h3 {
        margin-left: 40px;
    }
`
export const Ball = styled.div`
    background-color: red;
    width: 24px;
    height: 24px;
    border-radius: 20px;
`

export const CheckboxContainer = styled.div`
    display:flex;
    width: 100%;
    border-radius: 5px;
    height: 50px;
    width: 265px;

    p {
        margin-left: 10px;
        margin-right: 30px;
        margin-top: 15px;
    }

    svg {
        font-size: 3rem;
    }
`

export const ProgressContainer = styled.div`
    width: 100%;
    margin: 0 10px;
    
    p {
       margin-bottom: 15px;  
        
       span {
        font-size: 16px;
        font-style: italic;
        font-weight: 500;
    }
    }
`

export const IconContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
   
    figure {
        width: 40px;
        margin: 0;

        img {
        width: 100%;
    }
    }
`
export const BodyContainer = styled.div`
  
    width: 70%;
    margin: 0 auto;

`
