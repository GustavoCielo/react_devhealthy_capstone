import { useEffect } from "react";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import * as yup from "yup";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useUser } from "../../contexts/User";
import { useUserGroups } from "../../contexts/UserGroups";
import { useModal } from "../../contexts/Modal";
import { Container, ButtonStyle } from "./style";
import FullContainer from "../../components/FullContainer";
import Header from "../../components/Header";
import ContainerDashboard from "../../components/ContainerDashboard";
import AllGroups from "../../components/AllGroups";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import GroupCard from "../../components/GroupCard";

const Groups = () => {
  const { token, userGroups, getGroups } = useUser();
  const { isVisible, handleModal } = useModal();
  const { createGroup } = useUserGroups();

  const schema = yup.object().shape({
    name: yup.string().min(3, "Mínimo de 3 caracteres"),
    description: yup.string().min(6, "Mínimo de 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitGroup = (data) => {
    console.log(data);
    createGroup(data);
  };

  useEffect(() => {
    if (token) {
      getGroups();
    }
  }, []);

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <FullContainer>
      <Header/>
      <ContainerDashboard>
      {/* <Container>
        {userGroups.map((group) => (
          <GroupCard key={group.id} name={group.name}>
            {group.name}
          </GroupCard>
        ))}
        <ButtonStyle onClick={handleModal}>
          <AddCircleIcon />
          criar grupo
        </ButtonStyle>
      </Container> */}

      <AllGroups/>

      {/* {isVisible ? (
        <Modal>
          <form onSubmit={handleSubmit(submitGroup)}>
            <Input
              label="Título"
              register={register}
              name="name"
              error={!!errors.name}
              errorMsg={errors.name?.message}
            />

            <FormControl style={{ width: "100%", marginBottom: 10 }}>
              <InputLabel>Categoria</InputLabel>
              <Select {...register("category")} required>
                <MenuItem value="Categoria" disabled>
                  Categoria
                </MenuItem>
                <MenuItem value="DevHealthy-Saúde">Saúde</MenuItem>
                <MenuItem value="DevHealthy-Hobby">Hobby</MenuItem>
                <MenuItem value="DevHealthy-Estudo">Estudo</MenuItem>
                <MenuItem value="DevHealthy-Culinária">Culinária</MenuItem>
              </Select>
            </FormControl>

            <Input
              label="Descrição"
              register={register}
              name="description"
              error={!!errors.description}
              errorMsg={errors.description?.message}
            />
            <Button type="submit">
              <AddCircleIcon />
              criar grupo
            </Button>
          </form>
        </Modal>
      ) : (
        ""
      )} */}
      </ContainerDashboard>
    </FullContainer>
  );
};

export default Groups;
