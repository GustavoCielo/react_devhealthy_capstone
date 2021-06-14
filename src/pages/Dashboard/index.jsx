import { Redirect } from "react-router";
import { useUser } from "../../contexts/User";
import FullContainer from "../../components/FullContainer";
import Header from "../../components/Header";
import ContainerDashboard from "../../components/ContainerDashboard";

const Dashboard = () => {
  const { token } = useUser();

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <FullContainer>
      <Header />
      <ContainerDashboard></ContainerDashboard>
    </FullContainer>
  );
};

export default Dashboard;
