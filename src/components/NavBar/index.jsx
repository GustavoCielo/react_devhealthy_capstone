import { Nav, NavLink, NavMenu } from "./style";

const Navbar = ({ username }) => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink exact to={`/${username}`} activeStyle>
            diário
          </NavLink>
          <NavLink to={`/${username}/habits`} activeStyle>
            hábitos
          </NavLink>
          <NavLink to={`/${username}/groups`} activeStyle>
            grupos
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
