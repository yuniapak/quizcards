import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";

const Profile = (props) => {
  let navigate = useNavigate();

  const initialState = { value: "" };
  const [subject, setSubject] = useState(initialState);

  useEffect(() => {
    const getCardbyType = async () => {
      try {
        let res = await axios.get(`http://localhost:3001/card/card`);
        console.log(res.data);
        setSubject(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCardbyType();
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSubject(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let res = await axios.post("http://localhost:3001/card/card", subject);
    setSubject(e.target.value);
    console.log(subject); // subject is logging as dropdown value
    // navigate("/Card", subject);
  };

  return (
    <div>
      <div className="profile-card">
        <div className="profile-card-header">
          Welcome <br></br>
          <br></br> userNAME!
        </div>

        <div>
          <form className="profile-form" onSubmit={handleSubmit}>
            <label id="form-select" htmlFor="SubjectType">
              Select Subject
              <br></br>
            </label>
            <br></br>
            <select id="value" onChange={handleChange} value={subject.value}>
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
            <button
              className="profile-btn"
              type="submit"
              to="/Card"
              subject={subject}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Card subject={subject} />
      {/* Card on same page? or continue to try to pass state? */}
    </div>
  );
};

export default Profile;
