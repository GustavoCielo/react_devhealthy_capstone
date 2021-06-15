import Button from "../../components/Button";
import FullContainer from "../../components/FullContainer";
import Header from "../../components/Header";
import ContainerDashboard from "../../components/ContainerDashboard";
import AllGroups from "../../components/AllGroups";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import GroupCard from "../../components/GroupCard";
import ContainerCard from "../../components/ContainerCard";
import ProgressBar from "../../components/ProgressBar";
import arrowDown from "../../assets/img/arrowDown.svg";
import ImageGroup from "../../assets/img/image_group.svg";
import {
  ActiviesContainer,
  Container,
  GoalsContainer,
  GroupContainer,
  MemberContainer,
  ContainerDescription,
  ButtonStyle,
  ButtonContainer,
  GroupCardContainer,
  ContainerColumn,
} from "./style";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";
import { useEffect, useState } from "react";
import { useModal } from "../../contexts/Modal";
import { useAuth } from "../../contexts/Auth";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../../contexts/User";
import { useUserGroups } from "../../contexts/UserGroups";

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
      <Header />
      <ContainerDashboard>
        <Container>
          <GroupContainer>
            <ButtonContainer>
              {/* <AllGroups /> */}
              <GroupCardContainer>
                <img src={ImageGroup} alt="nome do grupo" />
                <p>{userGroups[0].name}</p>
                <input type="checkbox" name="arrowDown" id="arrowDown" />
                <label htmlFor="arrowDown">
                  <img src={arrowDown} alt="chose your group" />
                </label>
              </GroupCardContainer>
              {/* <ContainerDescription>
                {userGroups.map((group) => (
                  <GroupCard key={group.id} name={group.name}>
                    {group.name}
                  </GroupCard>
                ))}
                <ButtonStyle onClick={handleModal}>
                  <AddCircleIcon />
                  criar grupo
                </ButtonStyle>
              </ContainerDescription> */}
              {isVisible ? (
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
                        <MenuItem value="DevHealthy-Culinária">
                          Culinária
                        </MenuItem>
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
              )}
            </ButtonContainer>
            <Button
              startIcon={<AddIcon />}
              grayText
              isLight
              onClick={handleModal}
            >
              criar atividade
            </Button>

            <Button
              startIcon={<AddIcon />}
              grayText
              isLight
              onClick={handleModal}
            >
              criar meta
            </Button>

            <ContainerColumn>
              <Button startIcon={<AddIcon />} color="secondary">
                pesquisar grupos
              </Button>
              <Button startIcon={<SettingsIcon />}>editar grupos</Button>
              {/* condicional: só mostrar se o ID do usuário for igual ao ID do criador do grupo */}
            </ContainerColumn>
          </GroupContainer>
          <ActiviesContainer>
            <ContainerCard title="atividades" />
            <ContainerCard title="metas">
              {console.log(userGroups)}
              {userGroups.goals?.map((item) => {
                return (
                  <li>
                    <img src="" alt={item.difficulty} />
                    <span>{item.title}</span>
                    <p>Progresso</p>
                    <ProgressBar>{item.how_much_achieved}</ProgressBar>
                    <input type="checkbox" />
                  </li>
                );
              })}
            </ContainerCard>
            <ContainerCard title="membros">
              <ul>
                {console.log(userGroups)}
                {userGroups.users_on_group?.map((item, index) => {
                  return <li key={index}>{item.username}</li>;
                })}
              </ul>
            </ContainerCard>
          </ActiviesContainer>
        </Container>
      </ContainerDashboard>
    </FullContainer>
  );
};

export default Groups;
