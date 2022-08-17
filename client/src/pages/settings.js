import axios from 'axios'
import { useState } from 'react'
import UpdatePassword from '../components/updatePassword'

const Settings = ({ user, userName }) => {
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

  return (
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
  )
}
export default Settings
