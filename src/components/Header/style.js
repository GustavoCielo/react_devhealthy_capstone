import styled from "styled-components";
import headerBG from "../../assets/img/headerBG.svg";

export const Container = styled.header`
  width: 100%;
  height: 35%;
  padding: 0 10px;
  background-color: #8ecc8e;

  .header {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    color: #fafafa;

    @media (max-width: 620px) {
      width: 100%;
      font-size: 1rem;
    }

    @media (max-width: 360px) {
      font-size: 0.8rem;
    }

    div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 60px;

        @media (min-width: 768px) {
          width: 80px;
        }
      }

      svg {
        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }
    }

    div:last-child {
      width: 100%;
      flex-grow: 1;
      display: flex;
      position: relative;

      div {
        width: 50%;
      }

      div:first-child,
      .welcomeWrapper {
        display: flex;
        flex-direction: column;
      }

      .welcomeWrapper {
        width: 100%;
        flex-grow: 1;
        padding: 0 0 40px 60px;
        align-items: flex-start;
        justify-content: center;

        p:last-child {
          font-weight: bold;
        }
      }

      .imageBG {
        background: url(${headerBG}) no-repeat center;
        background-size: contain;
      }
    }
  }
`;

export const TabMenu = styled.nav`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;

  ul {
    display: flex;

    li {
      padding: 4px 16px;
      border-radius: 8px 8px 0 0;
      a {
        font-size: 1.2rem;
        text-transform: uppercase;
        color: #fafafa;
        transition: color 300ms ease-in-out;

        &:hover {
          color: #e365c1;
        }

        @media (max-width: 767px) {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
