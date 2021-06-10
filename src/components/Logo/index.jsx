import { Header, Figure, Image, ImageIcon } from "./style";
import iconLogo from "../../assets/img/iconLogo.svg";
import logo from "../../assets/img/textLogo.svg";

const Logo = () => {
  return (
    <Header>
      <Figure>
        <ImageIcon src={iconLogo} alt="Ícone Logo Dev Healthy" />
        <Image src={logo} alt="Logo Dev Healthy" />
      </Figure>
    </Header>
  );
};

export default Logo;