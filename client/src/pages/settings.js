import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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

  return !authenticated ? (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">ConfirmPassword</label>
        <input
          name="name"
          type="text"
          placeholder={userName}
          value={newName.name}
          contentEditable="true"
          onChange={handleChange}
        ></input>
        <button type="submit" disabled={!newName.name}>
          update
        </button>
      </form>
      <UpdatePassword user={user} />
    </div>
  ) : (
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
  )
}
export default Settings
