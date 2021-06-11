import { Container, ContainerComponent } from "./style";

const ContainerCard = ({ children, title }) => {
  return (
    <Container>
      <h3>Title</h3>
      <ContainerComponent>elemento</ContainerComponent>
    </Container>
  );
};
export default ContainerCard;
