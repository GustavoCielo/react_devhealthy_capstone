import FullContainer from "../../components/FullContainer/index.jsx";
import Button from "../../components/Button/index.jsx";

import {
  ContainerStyled,
  InternContainer,
  ContainerLogo,
  ContainerControlers,
} from "./index.js";
import DevWoman from "../../assets/img/landing_page_woman.svg";
import DevBoy from "../../assets/img/landing_page_boy.svg";
import Logo_img from "../../assets/img/logo_img.svg";
import Logo_desc from "../../assets/img/logo_desc.svg";
import { useHistory } from "react-router";

const LandingPage = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <FullContainer>
      <ContainerStyled>
        <InternContainer>
          <figure>
            <img src={DevBoy} alt="Dev Woman" />
          </figure>
          <figure>
            <img src={DevWoman} alt="Dev Boy" />
          </figure>
        </InternContainer>
        <InternContainer>
          <ContainerLogo>
            <figure>
              <img src={Logo_img} alt="Logo" />
            </figure>
            <figure>
              <img src={Logo_desc} alt="Description" />
            </figure>
            <div>
              <h3>Being healthy is being alive</h3>
            </div>
          </ContainerLogo>
          <ContainerControlers>
            <Button onClick={() => handleNavigation("/register")}>
              CRIAR CONTA
            </Button>
            <Button
              color="secondary"
              onClick={() => handleNavigation("/login")}
            >
              ENTRAR
            </Button>
          </ContainerControlers>
        </InternContainer>
      </ContainerStyled>
    </FullContainer>
  );
};

export default LandingPage;
