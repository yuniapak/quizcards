import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();

  return (
    <div>
      <main className="profile-card">
        <div className="profile-card-header">
          Welcome <br></br>
          <br></br> userNAME!
        </div>

        <body>
          <form className="profile-form">
            <label id="form-select" htmlFor="SubjectType">
              Select Subject
              <br></br>
            </label>
            <br></br>
            <select id="SubjectType">
              <option value="Math">Math</option>
              <option value="History">History</option>
              <option value="Science">Science </option>
              <option value="Literature">Literature </option>
              <option value="Art">Art </option>
            </select>
            <br></br>
            <button className="profile-btn" type="submit">
              Submit
            </button>
          </form>
        </body>
      </main>
    </div>
  );
};

export default Profile;
