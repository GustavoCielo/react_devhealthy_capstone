import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Habits from "../pages/Habits";
import Groups from "../pages/Groups";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route exact path="/:username">
        <Dashboard />
      </Route>
      <Route path="/:username/habits">
        <Habits />
      </Route>
      <Route path="/:username/groups">
        <Groups />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
