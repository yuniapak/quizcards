import { NavLink } from "react-router-dom";
function Nav({ authenticated, user, handleLogOut }) {
  let authenticatedOption;
  if (user) {
    authenticatedOption = (
      <nav className="nav-bar">
        <h1 className="nav-title">?</h1>
        <div className="nav-link">
          <NavLink className="nav-link1" to="/Profile">
            <span className="nav-link2">Profile </span> 
          </NavLink>
          <NavLink className="nav-link1" to="/Settings">
            <span className="nav-link2"> Settings </span> 
          </NavLink>
          <NavLink className="nav-link1" to="/" onClick={handleLogOut}>
            {" "}
            <span className="nav-link2"> LogOut </span>
          </NavLink>
        </div>
      </nav>
    );
  }

  //-----Keep logo or revert?-----//
  const publicOption = (
    <nav className="nav-bar">
      <h1 className="nav-title">
        ?
      </h1>
      <div className="nav-link">
        <NavLink className="nav-link1" to="/">
          Home 
        </NavLink>
        <NavLink className="nav-link1" to="/Register">
          {" "}
          Sign up 
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
