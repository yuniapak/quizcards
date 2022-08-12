import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Profile = () => {
  let navigate = useNavigate()

  const [subject, setSubject] = useState('')
  const initialState = {
    type: ' '
  }

  const handleChange = (event) => {
    setIssues({ ...issues, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubject(event)
    console.log(subject)
  }

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
            <Link className="profile-btn" type="submit" to="/Cards">
              Submit
            </Link>
          </form>
        </body>
      </main>
    </div>
  )
}

export default Profile
