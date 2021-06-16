import { Container } from "./style";

const ActivityCard = ({ activity }) => {
  const { title, realization_time } = activity;

  return (
    <Container>
      <p>{title}</p>
      <p>
        Realização: {realization_time.slice(8, 10)}/
        {realization_time.slice(5, 7)}/{realization_time.slice(0, 4)} -{" "}
        {realization_time.slice(11, 16)}
      </p>
    </Container>
  );
};

export default ActivityCard;
