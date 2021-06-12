import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem, Menu } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, TabMenu } from "./style";
import { useAuth } from "../../contexts/Auth";
import { useUser } from "../../contexts/User";
import { useModal } from "../../contexts/Modal";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EditIcon from "@material-ui/icons/Edit";
import iconLogo from "../../assets/img/iconLogo.svg";
import FloatButton from "../FloatButton";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";

const Header = () => {
  const [isOpened, setIsOpened] = useState(null);

  const { logout } = useAuth();
  const { user, updateProfile } = useUser();
  const { handleModal } = useModal();

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Mínimo de 3 letras")
      .max(12, "máximo de 12 letras")
      .matches(
        "^(?=.{3,12}$)(?![_. ])(?!.*[_. ]{2})[a-zA-Z]+(?<![_. ])$",
        "Somente letras"
      ),
    email: yup.string().email("E-mail inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleToogle = (e) => {
    setIsOpened(e.currentTarget);
  };

  const handleClose = (e) => {
    setIsOpened(null);
  };

  const openSettings = () => {
    setIsOpened(null);
    handleModal();
  };

  const onSubmit = (data) => {
    updateProfile(data);
    handleModal();
    reset();
  };
  return (
    <>
      <Container>
        <div className="header">
          <div>
            <img src={iconLogo} alt="DevHealthy logo" />
            <FloatButton
              title="Menu"
              placement="left"
              onClick={handleToogle}
              icon={AccountCircleIcon}
            />
          </div>

          <div>
            <div>
              <div className="welcomeWrapper">
                <p>Bem-vindo(a),</p>
                <p>{user.username}!</p>
              </div>
              <TabMenu>
                <ul>
                  <li>
                    <Link to="/dashboard">diário</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/habits">hábitos</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/groups">grupos</Link>
                  </li>
                </ul>
              </TabMenu>
            </div>
            <div className="imageBG" />
          </div>
        </div>
      </Container>

      <Menu
        anchorEl={isOpened}
        keepMounted
        open={Boolean(isOpened)}
        onClose={handleClose}
      >
        <MenuItem onClick={openSettings}>
          <SettingsIcon />
          Minha conta
        </MenuItem>
        <MenuItem onClick={logout}>
          <ExitToAppIcon />
          Sair
        </MenuItem>
      </Menu>

      <Modal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={!!errors.username}
            errorMsg={errors.username?.message}
            label="Usuário"
            placeholder={user.username}
            register={register}
            name="username"
            icon={EditIcon}
            required={false}
          />
          <Input
            error={!!errors.email}
            errorMsg={errors.email?.message}
            label="E-mail"
            placeholder={user.email}
            register={register}
            name="email"
            icon={EditIcon}
            required={false}
          />
          <Button type="submit">Atualizar</Button>
        </form>
      </Modal>
    </>
  );
};

export default Header;
