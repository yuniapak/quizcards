import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Profile = () => {
  let navigate = useNavigate();

  const [subject, setSubject] = useState([]);
  const initialState = {
    value: "Select",
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSubject(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/Card");
    setSubject(initialState);
  };

  return (
    <div>
      <main className="profile-card">
        <div className="profile-card-header">
          Welcome <br></br>
          <br></br> userNAME!
        </div>

        <body>
          <form className="profile-form" onSubmit={handleSubmit}>
            <label id="form-select" htmlFor="SubjectType">
              Select Subject
              <br></br>
            </label>
            <br></br>
            <select id="SubjectType" onChange={handleChange} value={subject}>
              <option value="" disabled hidden>
                Selection
              </option>
              <option value="Math">Math</option>
              <option value="History">History</option>
              <option value="Science">Science </option>
              <option value="Literature">Literature </option>
              <option value="Art">Art </option>
            </select>
            <br></br>
            <Link
              className="profile-btn"
              type="submit"
              to="/Card"
              subject={subject}
            >
              Submit
            </Link>
          </form>
        </body>
      </main>
    </div>
  );
};

export default Profile;
