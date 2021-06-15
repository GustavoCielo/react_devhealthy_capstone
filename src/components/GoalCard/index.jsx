import CheckIcon from "@material-ui/icons/Check";
import ProgressBar from "../ProgressBar";
import FloatButton from "../FloatButton";
import { Container, HeaderContainer, Ball, ProgressContainer } from "./style";

const GoalCard = ({ title, difficulty, how_much_achieved }) => {
  return (
    <Container>
      <HeaderContainer>
        <Ball difficulty={difficulty}/>
        <p>{title}</p>
        <FloatButton title="Completar" icon={CheckIcon} />
      </HeaderContainer>

      <ProgressContainer>
        <p>
          Progresso:
          <span> {how_much_achieved}%</span>
        </p>
        <ProgressBar progress={how_much_achieved} />
      </ProgressContainer>
    </Container>
  );
};

export default GoalCard;
