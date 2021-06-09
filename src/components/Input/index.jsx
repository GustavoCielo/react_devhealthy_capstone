import InputAdornment from "@material-ui/core/InputAdornment";
import { InputStyled } from "./style";

const Input = ({
  label,
  icon: Icon,
  register,
  name,
  required = true,
  ...rest
}) => {
  return (
    <InputStyled
      {...register(name)}
      label={label}
      placeholder={!!Icon && label}
      InputProps={
        Icon && {
          startAdornment: (
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          ),
        }
      }
      variant="outlined"
      color="primary"
      {...rest}
      required={required}
    />
  );
};

export default Input;
