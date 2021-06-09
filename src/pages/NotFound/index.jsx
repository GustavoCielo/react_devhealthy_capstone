import { useState } from "react";
import { useHistory } from "react-router-dom";
import FullContainer from "../../components/FullContainer";
import Button from "../../components/Button";
import { Container, Content } from "./style";

const NotFound = () => {
  const history = useHistory();

  const [move, setMove] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMove({ x: e.clientX / 5, y: e.clientY / 5 });
  };

  const goToLandingPage = () => {
    history.push("/");
  };

  return (
    <FullContainer>
      <Container onMouseMove={handleMouseMove} move={move}>
        <Content>
          <h2>404</h2>
          <h4>OPS! Página não encontrada</h4>
          <p>
            A página que você estava procurando não existe. Você pode ter
            digitado incorretamente o endereço ou a página pode ter sido movida.
          </p>
          <Button onClick={goToLandingPage}>Voltar para o início</Button>
        </Content>
      </Container>
    </FullContainer>
  );
};

export default NotFound;
