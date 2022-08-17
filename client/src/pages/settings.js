import axios from 'axios'
import { useState } from 'react'

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
        Name:
        <input
          name="name"
          type="text"
          placeholder={userName}
          value={newName.name}
          contentEditable="true"
          onChange={handleChange}
        ></input>
        <button type="submit">update</button>
      </form>
    </div>
  )
}
export default Settings
