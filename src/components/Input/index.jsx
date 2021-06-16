import InputAdornment from "@material-ui/core/InputAdornment";
import { Container, InputStyled } from "./style";

const Input = ({
  label,
  icon: Icon,
  register,
  name,
  errorMsg = "",
  required = true,
  pinkScheme = false,
<<<<<<< HEAD
  isValidated = false,
=======
>>>>>>> b5d2c198ae7fb227848765aa9f41a66a9d954b30
  ...rest
}) => {
  return (
    <Container>
      <InputStyled
        {...register(name)}
        label={label}
        InputProps={
          Icon && {
            startAdornment: (
              <InputAdornment position="start">
                <Icon />
              </InputAdornment>
            ),
          }
        }
        placeholder={label}
        variant="standard"
        color="primary"
        {...rest}
        required={required}
        size="small"
        pinkScheme={pinkScheme}
      />
      {isValidated && (
        <div className="message"> {!!errorMsg && <span>{errorMsg}</span>}</div>
      )}
    </Container>
  );
};

export default Input;
