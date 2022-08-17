import axios from 'axios'
import { useState } from 'react'
const UpdatePassword = ({user}) => {
const [passwordForm, setPasswordForm] = useState({password:'', newPassword: '', confirmPassword: ''})

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
    updatePassword({password: passwordForm.password,
    newPassword: passwordForm.newPassword})
    setPasswordForm({password:'', newPassword: '', confirmPassword: ''

    })
    //console.log(newName)
  }

    return <div>
        <h2>Update Password</h2>
         <form onSubmit={handleSubmit}>
        
        <label htmlFor="password">Password</label>{' '}
        <input
         className="addCard-input"
          name="password"
          type="password"
          placeholder='Current Password'
          value={passwordForm.password}
          contentEditable="true"
          onChange={handleChange}
          required
        ></input>
        
        <label htmlFor="password"> NewPassword</label>
        {' '}
        <input
         className="addCard-input"
          name="newPassword"
          type="password"
          placeholder='New Password'
          value={passwordForm.newPassword}
          contentEditable="true"
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="password">ConfirmPassword</label>
        <input
         className="addCard-input"
          name="confirmPassword"
          type="password"
          placeholder='Confirm Password'
          value={passwordForm.confirmPassword}
          contentEditable="true"
          onChange={handleChange}
          required
        ></input>
        <button className='setting-btn' type="submit" disabled= { !passwordForm.password ||
              (!passwordForm.newPassword &&
                passwordForm.confirmPassword === passwordForm.newPassword)}>Change Password</button>
      </form>
    </div>
}
export default UpdatePassword