import { NavLink } from "react-router-dom";
function Nav({ authenticated, user, handleLogOut }) {
  let authenticatedOption;
  if (user) {
    authenticatedOption = (
      <nav className="nav-bar">
        <h1 className="nav-title">
          Quiz<span className="c">c</span>ards!
        </h1>
        <div className="nav-link">
          <NavLink className="nav-link1" to="/Profile">
            Profile |
          </NavLink>
          <NavLink className="nav-link1" to="/Settings">
            Settings |
          </NavLink>
          <NavLink className="nav-link1" to="/" onClick={handleLogOut}>
            {" "}
            LogOut
          </NavLink>
        </div>
      </nav>
    );
  }

  //-----Keep logo or revert?-----//
  const publicOption = (
    <nav className="nav-bar">
      <h1 className="nav-title">
        Quiz<span className="c">c</span>ards!
      </h1>
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
  return (
    <div>{authenticated && user ? authenticatedOption : publicOption}</div>
  );
}

export default Nav;
