import axios from 'axios'
import { useState } from 'react'
const UpdatePassword = ({user}) => {
const [passwordForm, setPasswordForm] = useState({password:'', newPassword: ''})

const updatePassword = async(form) =>{
   try{ 
    const res = await axios.put(`http://localhost:3001/api/auth/update/${user.id}`, form )
    console.log(res)
}catch (error){
    throw error
}}


const handleChange = (event) => {
    setPasswordForm({ ...passwordForm, [event.target.name]: event.target.value })
    console.log(passwordForm)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    updatePassword(passwordForm)
    //console.log(newName)
  }

    return <div>
        <h2>Update Password</h2>
         <form onSubmit={handleSubmit}>
        
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder='Current password'
          value={passwordForm.password}
          contentEditable="true"
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="password">New Password</label>
        <input
          name="newPassword"
          type="password"
          placeholder='New password'
          value={passwordForm.newPassword}
          contentEditable="true"
          onChange={handleChange}
          required
        ></input>
        <button type="submit">Change Password</button>
      </form>
    </div>
}
export default UpdatePassword