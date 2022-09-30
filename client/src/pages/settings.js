import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import UpdatePassword from '../components/updatePassword'

const Settings = ({ user, userName, authenticated }) => {
  const [newName, setNewName] = useState({ name: '' })

  const updateName = async (name) => {
    try {
      const res = await axios.put(
        `https://quiz-cards-psql.herokuapp.com/api/user/${user.id}`,
        name
      )
      console.log('here', res)
    } catch (error) {
      throw error
    }
  }
  const handleChange = (event) => {
    setNewName({ ...newName, [event.target.name]: event.target.value })
    console.log(newName)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    updateName(newName)
    console.log(newName)
  }
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <div className="main-div">
        <div className="Addcard">
          <h2 className="h2-setting">Settings</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="password" className="update-name">
              Update Name{' '}
            </label>
            <input
              className="addCard-input"
              name="name"
              type="text"
              placeholder={userName}
              value={newName.name}
              contentEditable="true"
              onChange={handleChange}
            ></input>{' '}
            <button
              className="setting-btn"
              type="submit"
              disabled={!newName.name}
            >
              Update
            </button>
          </form>
          <UpdatePassword user={user} />
        </div>{' '}
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

export default Settings
