import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Cooking from "../../assets/img/cooking.svg";
import Health from "../../assets/img/health.svg";
import Hobbies from "../../assets/img/hobbies.svg";
import Studies from "../../assets/img/studies.svg";

import { green } from "@material-ui/core/colors";
import { Checkbox, FormControlLabel, withStyles } from "@material-ui/core/";
import ProgressBar from "../ProgressBar";

import {
  HabitCardStyled,
  Ball,
  CheckboxContainer,
  HeaderContainer,
  ProgressContainer,
  IconContainer,
  BodyContainer,
} from "./style";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$check": {
      color: green[600],
    },
  },
  check: {},
})((props) => <Checkbox color="default" {...props} />);

const HabitCard = ({ title, how_much_achieved, category }) => {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.check });
  };

  return (
    <HabitCardStyled>
      <HeaderContainer>
        <Ball />
        <h3>{title}</h3>
      </HeaderContainer>
      <BodyContainer>
        <CheckboxContainer>
          <p>Completar:</p>
          <FormControlLabel
            control={
              <GreenCheckbox
                check={state.checked}
                onChange={handleChange}
                name="checked"
              />
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
              category === "Sáude"
                ? Health
                : category === "Estudos"
                ? Studies
                : category === "Culinária"
                ? Cooking
                : Hobbies
            }
          />
        </figure>
        <DeleteIcon />
      </IconContainer>
    </HabitCardStyled>
  );
};
export default HabitCard;
