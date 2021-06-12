import { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  withStyles,
  Backdrop,
} from "@material-ui/core/";
import { green } from "@material-ui/core/colors";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import Cooking from "../../assets/img/cooking.svg";
import Health from "../../assets/img/health.svg";
import Hobby from "../../assets/img/hobbies.svg";
import Study from "../../assets/img/studies.svg";
import ProgressBar from "../ProgressBar";
import FloatButton from "../FloatButton";
import Button from "../Button";
import { useUser } from "../../contexts/User";
import {
  HabitCardStyled,
  Ball,
  CheckboxContainer,
  HeaderContainer,
  ProgressContainer,
  IconContainer,
  BodyContainer,
  useStyles,
} from "./style";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$check": {
      color: green[600],
    },
  },
  check: {},
})((props) => (
  <Checkbox
    icon={<RadioButtonUncheckedIcon />}
    checkedIcon={<CheckCircleIcon />}
    color="default"
    {...props}
  />
));

const HabitCard = ({ habit }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [hasCompleted, setHasCompleted] = useState(false);

  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const { title, how_much_achieved, category, difficulty, id } = habit;

  const { deleteHabit } = useUser();

  const handleChange = (e) => {
    setIsChecked(!isChecked);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleDelete = () => {
    deleteHabit(id);
    handleToggle();
  };

  return (
    <>
      <HabitCardStyled>
        <HeaderContainer>
          <Ball difficulty={difficulty} />
          <p>{title}</p>
        </HeaderContainer>
        <BodyContainer>
          <CheckboxContainer>
            <p>Completei hoje:</p>
            <FormControlLabel
              control={
                <GreenCheckbox check={isChecked} onChange={handleChange} disabled={hasCompleted}/>
              }
            />
          </CheckboxContainer>
          <ProgressContainer>
            <p>
              Progresso:
              <span> {how_much_achieved}%</span>
            </p>
            <ProgressBar progress={how_much_achieved} />
          </ProgressContainer>
        </BodyContainer>
        <IconContainer>
          <figure>
            <img
              src={
                category === "Saúde"
                  ? Health
                  : category === "Estudo"
                  ? Study
                  : category === "Culinária"
                  ? Cooking
                  : Hobby
              }
              alt="Categoria do hábito"
            />
          </figure>
          <FloatButton
            onClick={handleToggle}
            title="Excluir"
            icon={DeleteIcon}
            color="primary"
          />
        </IconContainer>
      </HabitCardStyled>

      <Backdrop className={classes.backdrop} open={open}>
        <div>
          <p>Tem certeza que quer deletar o hábito?</p>
          <div>
            <Button onClick={handleToggle}>Não</Button>
            <Button onClick={() => handleDelete()} color="secondary">
              Sim
            </Button>
          </div>
        </div>
      </Backdrop>
    </>
  );
};
export default HabitCard;
