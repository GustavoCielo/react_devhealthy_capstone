import { Container } from "./style";

const ContainerCard = ({ children, title, width }) => {
  return (
    <Container width={width}>
      <h3>{title}</h3>
      {children}
    </Container>
  );
};
export default ContainerCard;
