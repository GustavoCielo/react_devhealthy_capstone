import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../contexts/User";
import { useModal } from "../../contexts/Modal";
import { Container, Form, HabitContainer, NoHabits } from "./style";
import * as yup from "yup";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import StarRateIcon from "@material-ui/icons/StarRate";
import FullContainer from "../../components/FullContainer";
import Header from "../../components/Header";
import ContainerDashboard from "../../components/ContainerDashboard";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import SelectInput from "../../components/SelectInput";
import Button from "../../components/Button";
import HabitCard from "../../components/HabitCard";
import Loader from "../../components/Loader";

const Habits = () => {
  const { id, createHabit, getHabits, habits, token, getProfile } = useUser();
  const { handleModal } = useModal();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      getHabits();
      getProfile();
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  const schema = yup.object().shape({
    title: yup.string().max(50, "Máximo de 50 caracteres"),
    category: yup.string(),
    difficulty: yup.string(),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const categoryOptions = [
    {
      id: "Saúde",
      label: "Saúde",
    },
    {
      id: "Hobby",
      label: "Hobby",
    },
    {
      id: "Estudo",
      label: "Estudo",
    },
    {
      id: "Culinária",
      label: "Culinária",
    },
  ];

  const difficultyOptions = [
    {
      id: "Fácil",
      label: "Fácil",
      qtd: [1],
    },
    {
      id: "Média",
      label: "Média",
      qtd: [1, 2],
    },
    {
      id: "Difícil",
      label: "Difícil",
      qtd: [1, 2, 3],
    },
    {
      id: "Muito Difícil",
      label: "Muito Difícil",
      qtd: [1, 2, 3, 4],
    },
  ];

  const onSubmit = (data) => {
    const habitData = {
      title: data.title,
      category: data.category,
      difficulty: data.difficulty,
      frequency: "Diária",
      achieved: false,
      how_much_achieved: 0,
      user: id,
    };
    createHabit(habitData);
    handleModal();
    reset();
  };

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <FullContainer>
      <Header />
      <ContainerDashboard>
        <Container>
          <Button
            onClick={handleModal}
            startIcon={<AddCircleIcon />}
            className="btnAddHabit"
          >
            Adicionar Hábito
          </Button>

          {isLoading ? (
            <Loader />
          ) : !!habits[0] ? (
            <>
              <p className="habitsTitle">Complete seus hábitos diariamente.</p>
              <HabitContainer>
                {habits
                  .filter((habit) => habit.achieved === false)
                  .map((habit) => (
                    <li key={habit.id}>
                      <HabitCard habit={habit} />
                    </li>
                  ))}
              </HabitContainer>
            </>
          ) : (
            <NoHabits>
              <p>Nenhum hábito cadastrado</p>
            </NoHabits>
          )}
        </Container>
      </ContainerDashboard>

      <Modal>
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Input
              label="Título"
              register={register}
              error={!!errors.title}
              errorMsg={errors.title?.message}
              name="title"
              isValidated
            />

            <SelectInput
              name="category"
              title="Categoria"
              label="Categoria"
              options={categoryOptions}
              required
            />
            <SelectInput
              name="difficulty"
              title="Dificuldade"
              icon={StarRateIcon}
              label="Dificuldade"
              options={difficultyOptions}
              required
            />

            <Button type="submit" color="secondary">
              Adicionar
            </Button>
          </Form>
        </FormProvider>
      </Modal>
    </FullContainer>
  );
};

export default Habits;
