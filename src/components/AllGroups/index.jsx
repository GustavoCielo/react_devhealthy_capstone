import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { AiFillPlusCircle } from "react-icons/ai";
import { useGroups } from "../../contexts/Groups";
import { useModal } from "../../contexts/Modal";
import Backdrop from "../Backdrop";
import {
  ContainerGroups,
  ContainerStyled,
  InternContainer,
  useStyles,
  ContainerControlers,
  InputStyled,
  ButtonCreateGroup,
  Container,
} from "./style.js";
import GroupCard from "../GroupCard";
import Modal from "../Modal";
import FloatButton from "../FloatButton";
import Button from "../Button";
import image_group from "../../assets/img/image_group.svg";
import { useUserGroups } from "../../contexts/UserGroups";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Form from "../Form";

const AllGroups = () => {
  const {
    groups,
    handleNext,
    handlePrev,
    conEnterGroup,
    previous,
    next,
    inputSearch,
    setInputSearch,
    getGroupsByCategory,
  } = useGroups();
  const { isVisible, handleModal } = useModal();
  const [modalInfo, setModalInfo] = useState();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { createGroup } = useUserGroups();
  const [isVisibleCreateGroup, setIsVisibleCreateGroup] = useState(false);

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
    setIsVisibleCreateGroup(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClick = (info) => {
    setModalInfo(info);
    handleModal();
  };

  const handleClose = () => {
    handleModal();
    handleToggle();
  };

  const handleEnterGroup = (id) => {
    conEnterGroup(id);
    handleModal();
  };

  const createGroupByUser = () => {
    setIsVisibleCreateGroup(true);
  };

  return (
    <>
      <Container>
        <ContainerControlers>
          <InputStyled>
            <GoSearch />
            <input
              type="text"
              placeholder="pesquisar grupo"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </InputStyled>
          <ButtonCreateGroup onClick={createGroupByUser}>
            <AiFillPlusCircle />
            <span>Criar Grupo</span>
          </ButtonCreateGroup>
          <ul>
            <li onClick={() => getGroupsByCategory("DevHealthy-Culinária")}>
              <a href="#">Culinária</a>
            </li>
            <li onClick={() => getGroupsByCategory("DevHealthy-Estudo")}>
              <a href="#">Estudo</a>
            </li>
            <li onClick={() => getGroupsByCategory("DevHealthy-Hobby")}>
              <a href="#">Hobby</a>
            </li>
            <li onClick={() => getGroupsByCategory("DevHealthy-Saúde")}>
              <a href="#">Saúde</a>
            </li>
            <li onClick={() => getGroupsByCategory("DevHealthy")}>Todos</li>
          </ul>
        </ContainerControlers>
        <ContainerStyled>
          <FloatButton
            title="Voltar"
            icon={MdKeyboardArrowLeft}
            onClick={handlePrev}
            disabled={!previous ?? true}
          />
          <ContainerGroups>
            {inputSearch
              ? groups
                  .filter((group) => {
                    return group.name
                      .toLowerCase()
                      .includes(inputSearch.toLowerCase());
                  })
                  .map((group) => {
                    return (
                      <GroupCard
                        key={group.id}
                        name={group.name}
                        handleClick={() =>
                          handleClick({
                            id: group.id,
                            name: group.name,
                            description: group.description,
                            category: group.category,
                          })
                        }
                      />
                    );
                  })
              : groups.map((group) => {
                  return (
                    <GroupCard
                      key={group.id}
                      name={group.name}
                      handleClick={() =>
                        handleClick({
                          id: group.id,
                          name: group.name,
                          description: group.description,
                          category: group.category,
                        })
                      }
                    />
                  );
                })}
          </ContainerGroups>
          <FloatButton
            title="Avançar"
            icon={MdKeyboardArrowRight}
            onClick={handleNext}
            disabled={!next ?? true}
          />
          {
            <Backdrop simple open={isVisibleCreateGroup}>
              <Form onSubmit={handleSubmit(submitGroup)}>
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
              </Form>
            </Backdrop>
          }
        </ContainerStyled>
      </Container>
      {isVisible && (
        <Modal>
          <InternContainer>
            <div className="Header">
              <figure>
                <img src={image_group} alt="logo" />
              </figure>
              <h4>{modalInfo.name}</h4>
            </div>
            <div className="Body">
              <p>
                <span>Descrição:</span> {modalInfo.description}
              </p>
              <p>
                <span>Categoria:</span> {modalInfo.category.split("-")[1]}
              </p>
            </div>

            <Button color="secondary" onClick={handleToggle}>
              Entrar
            </Button>
            <Backdrop simple text="Confirma a entrada no grupo?" open={open}>
              <Button onClick={handleClose}>Não</Button>
              <Button
                onClick={() => handleEnterGroup(modalInfo.id)}
                color="secondary"
              >
                Sim
              </Button>
            </Backdrop>
          </InternContainer>
        </Modal>
      )}
    </>
  );
};

export default AllGroups;
