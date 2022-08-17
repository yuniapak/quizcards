import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogImg from '../images/notlogin.png'
import UpdatePassword from '../components/updatePassword'

const Settings = ({ user, userName, authenticated }) => {
  const [newName, setNewName] = useState({ name: '' })

  const updateName = async (name) => {
    try {
      const res = await axios.put(
        `http://localhost:3001/api/user/${user.id}`,
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
          <h2>Settings</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="password">Update Name </label>
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
              update
            </button>
          </form>
          <UpdatePassword user={user} />
        </div>{' '}
      </div>
    )
  }

  const publicOptions = (
    <div>
      <div>
        <h2>Do you want to create an accout?</h2>
        <Link className="main-btn" to="/register">
          Register
        </Link>
        <h2>Have an accout? Welcome back!</h2>
        <Link className="main-btn" to="/login">
          Login
        </Link>
      </div>
      <img className="logoff-image" src={LogImg} alt="image1" />
    </div>
  )

  return <div>{authenticated ? authenticatedOptions : publicOptions}</div>
}

export default Settings
