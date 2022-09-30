import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'

import axios from 'axios'

const Profile = ({
  // setCardsObj,
  user,
  authenticated,
  getCardByType,
  setSubject,
  subject,
  getTypes,
  loading,
  types,
  setUserName,
  userName
}) => {
  let navigate = useNavigate()
  // const initialState = { value: '' }

  const handleChange = (event) => {
    event.preventDefault()
    setSubject(event.target.value)
    console.log(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    //calling axios on submit

    getCardByType(subject)
    navigate(`/Card`)
  }
  const getUserName = async () => {
    const result = await axios.get(
      `https://quiz-cards-psql.herokuapp.com/api/user/${user.id}`
    )
    // ---Capitalizing Name-----//
    const firstletter = result.data.name[0].toUpperCase()

    const restOfName = result.data.name.slice(1, result.data.name.length)

    //----------------------------
    // setUserName(result.data.name);
    setUserName(firstletter + restOfName)
  }
  const navigateToAddType = () => {
    navigate(`/AddCard`)
  }

  useEffect(() => {
    if (user) {
      getTypes()
      getUserName()
    }
  }, [])

  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <div>
        <div className="profile-card">
          <div className="profile-card-header">
            Welcome <br></br>
            {userName} !
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
                Show Cards
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
  const publicOptions = (
    <div>
      <h2>Please log in to use Quizards...</h2>
      <br></br>
      <Link className="main-btn" to="/Login">
        Login now
      </Link>
      <br></br>
      <Link className="main-btn" to="/Register">
        Sign up
      </Link>
    </div>
  )

  return <div>{authenticated ? authenticatedOptions : publicOptions}</div>
}

export default Profile
