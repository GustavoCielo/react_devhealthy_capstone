import { useStyles } from "./style";
import { ButtonStyled } from "./style";

const Button = ({ children, color = "primary", isLight = false, ...rest }) => {
  const classes = useStyles();
  return (
    <ButtonStyled
      className={isLight && classes.primaryLight}
      color={color}
      variant="contained"
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
