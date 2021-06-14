import AddCircleIcon from "@material-ui/icons/AddCircle";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { Container, ButtonStyle } from "./style";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import GroupCard from "../../components/GroupCard";
import { useModal } from "../../contexts/Modal";
import { useUserGroups } from "../../contexts/UserGroups";

const Groups = () => {
  const { isVisible, handleModal } = useModal();
  const { userGroups, getGroups, createGroup } = useUserGroups();

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
    getGroups();
  }, []);

  return (
    <>
      <Container>
        {userGroups.map((group) => (
          <GroupCard key={group.id} name={group.name}>
            {group.name}
          </GroupCard>
        ))}
        <ButtonStyle onClick={handleModal}>
          <AddCircleIcon />
          criar grupo
        </ButtonStyle>
      </Container>

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
      )}
    </>
  );
};

export default Groups;
