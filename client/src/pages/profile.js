import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogImg from "../images/notlogin.png";
import axios from "axios";
import Card from "./card";

const Profile = ({
  setCardsObj,
  user,
  authenticated,
  getCardbyType,
  setSubject,
  subject,
  getTypes,
  loading,
  types,
}) => {
  let navigate = useNavigate();
  const initialState = { value: "" };
  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSubject(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //calling axios on submit

    getCardbyType(subject);
    navigate(`/Card`);
  };
  const getUserName = async () => {
    console.log(user);
    const result = await axios.get(`http://localhost:3001/api/user/${user.id}`);
    // ---Capitalizing Name-----//
    const firstletter = result.data.name[0].toUpperCase();
    console.log(firstletter);
    const restOfName = result.data.name.slice(1, result.data.name.length);
    console.log(restOfName);
    console.log(restOfName);
    //----------------------------
    // setUserName(result.data.name);
    setUserName(firstletter + restOfName);
  };
  const navigateToAddType = () => {
    navigate(`/AddCard`);
  };

  useEffect(() => {
    getTypes();
    getUserName();
  }, []);

  let authenticatedOptions;
  if (user) {
    authenticatedOptions = (
      <div>
        <div className="profile-card">
          <div className="profile-card-header">
            Welcome <br></br>
            <br></br> {userName} !
          </div>
          <div>
            <button className="add-sub-btn" onClick={navigateToAddType}>
              New Subject
            </button>
          </div>
          <div>
            <form className="profile-form" onSubmit={handleSubmit}>
              <label id="form-select" htmlFor="SubjectType">
                Select Subject
                <br></br>
              </label>
              <br></br>
              <select
                id="value"
                onChange={handleChange}
                value={subject}
                disabled={loading}
              >
                <option value="" disabled hidden>
                  Selection
                </option>
                {types.map(({ value, label }) => (
                  <option value={value}>{label}</option>
                ))}
              </select>
              <br></br>
              <button className="profile-btn" type="submit" to="/Card">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  const publicOptions = (
    <div>
      <h2>Please log in to use Quizards...</h2>
      <img className="logoff-image" src={LogImg} alt="image1" />
      <br></br>
      <Link className="main-btn" to="/login">
        Login now
      </Link>
    </div>
  );


  return <div>{authenticated ? authenticatedOptions : publicOptions}</div>
}


export default Profile;
