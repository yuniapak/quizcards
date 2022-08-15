import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './card'

const Profile = ({ setCardsObj, user }) => {
  let navigate = useNavigate()
  let loaded = false
  const initialState = { value: '' }
  const [subject, setSubject] = useState(initialState)
  const [userName, setUserName] = useState('')
  const [types, setTypes] = useState([{ label: 'Loading...', value: '' }])

  const getTypes = async () => {
    try {
      let result = await axios.get(
        `http://localhost:3001/api/card/card/${user.id}`
      )
      if (!loaded) {
        setTypes(result.data.map(({ type }) => ({ label: type, value: type })))
      }
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    getTypes()
  }, [])

  const getCardbyType = async (value) => {
    try {
      let res = await axios.get(`http://localhost:3001/api/card/card/${value}`)
      console.log(res.data)
      //setting result to useState to pass through
      setCardsObj(res.data)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    event.preventDefault()
    setSubject(event.target.value)
    console.log(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    //calling axios on submit
    getCardbyType(subject)
    setSubject(initialState)
    //navigate(`/Card`)
  }
  const getUserName = async () => {
    console.log(user)
    const result = await axios.get(`http://localhost:3001/api/user/${user.id}`)
    setUserName(result.data.name)
  }
  // getUserName()

  return (
    <div>
      <div className="profile-card">
        <div className="profile-card-header">
          Welcome <br></br>
          <br></br> {userName}
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
              {types.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
              {/* <option value="Math">Math</option>
              <option value="History">History</option>
              <option value="Science">Science </option>
              <option value="Literature">Literature </option>
              <option value="Art">Art </option> */}
            </select>
            <br></br>
            <button
              onClick={handleSubmit()}
              className="profile-btn"
              type="submit"
              to="/Card"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
