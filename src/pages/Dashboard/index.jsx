import { useEffect, useState } from "react";
import { useUser } from "../../contexts/User";
import { Redirect, useHistory, useParams } from "react-router-dom";
import {
  IconeSeta,
  SeeMore,
  List,
  Content,
  LevelDifficulty,
  Goals,
  NameGroup,
  ProgressStyle,
  TitleGoal,
  LinkStyle,
  NullGoals,
} from "./style";
import FullContainer from "../../components/FullContainer";
import ContainerDashboard from "../../components/ContainerDashboard";
import Header from "../../components/Header";
import ContainerCard from "../../components/ContainerCard";
import Null from "../../assets/img/nothing-registered.svg";
import seta from "../../assets/img/seta.svg";
import habitIcon from "../../assets/img/habitIcon.svg";
import groupIcon from "../../assets/img/image_group.svg";
import Loader from "../../components/Loader";

const Dashboard = () => {
  const { token, getProfile, userGroups, getGroups, habits, getHabits } =
    useUser();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      getHabits();
      getProfile();
      getGroups();
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  if (!token) {
    return <Redirect to="/" />;
  }

  console.log(userGroups);

  return (
    <FullContainer>
      <Header />
      <ContainerDashboard>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ContainerCard title="Grupos" width="22%">
              {!!userGroups[0] ? (
                <>
                  <List>
                    {userGroups.map((groups) => (
                      <Content key={groups.id}>
                        <img src={groupIcon} alt="Ícone grupos" />
                        <div>{groups.name}</div>
                      </Content>
                    ))}
                  </List>
                  <SeeMore onClick={() => history.push("/dashboard/groups")}>
                    <span>ver mais</span>
                    <IconeSeta src={seta} alt="Seta" />
                  </SeeMore>
                </>
              ) : (
                <div>
                  Você não participa de nenhum grupo,{" "}
                  <LinkStyle to="/dashboard/groups">clique aqui</LinkStyle> para
                  ver a lista completa dos grupos!
                </div>
              )}
            </ContainerCard>
            <ContainerCard title="Metas" width="50%">
              {!!userGroups[0] &&
              userGroups.map((group) =>
                group.goals.reduce((goal, acc) => goal.length + acc, 0)
              ) ? (
                <List>
                  {userGroups.map((groups) =>
                    groups.goals.map((goal) => (
                      <Content key={goal.id}>
                        <Goals>
                          <TitleGoal>{goal.title}</TitleGoal>
                          <LevelDifficulty difficulty={goal.difficulty} />
                          <NameGroup>grupo: {groups.name}</NameGroup>
                          <ProgressStyle progress={goal.how_much_achieved}>
                            Progresso atual:{" "}
                            <span>{goal.how_much_achieved}%</span>
                          </ProgressStyle>
                        </Goals>
                      </Content>
                    ))
                  )}
                </List>
              ) : (
                <NullGoals>
                  sem metas cadastradas
                  <img src={Null} alt="" />
                </NullGoals>
              )}
            </ContainerCard>
            <ContainerCard title="Hábitos" width="22%">
              {!!habits[0] ? (
                <>
                  <List>
                    {habits.map((habit) => (
                      <Content key={habit.id}>
                        <img src={habitIcon} alt="Ícone hábitos" />
                        <div>{habit.title}</div>
                      </Content>
                    ))}
                  </List>
                  <SeeMore onClick={() => history.push("/dashboard/habits")}>
                    <span>ver mais</span>
                    <IconeSeta src={seta} alt="Seta" />
                  </SeeMore>
                </>
              ) : (
                <div>
                  <LinkStyle to="/dashboard/habits">Clique aqui</LinkStyle> para
                  cadastrar um novo hábito.
                </div>
              )}
            </ContainerCard>
          </>
        )}
      </ContainerDashboard>
    </FullContainer>
  );
};

export default Dashboard;
