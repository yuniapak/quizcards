import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav-bar">
      <h1 className="nav-title">Quizards!</h1>
      <div className="nav-link">
        <NavLink className="nav-link1" to="/">
          Home |
        </NavLink>
        <NavLink className="nav-link1" to="/Register">
          {" "}
          Sign up |
        </NavLink>
        <NavLink className="nav-link1" to="/Login">
          {" "}
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
