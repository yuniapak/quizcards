import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../services/Auth'
const Login = ({ setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await signIn(formValues)
    console.log(payload)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/Profile')
  }
  return (
    <div className="signin col , main-div">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <br></br>
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email@Address.com"
              value={formValues.email}
              required
            />
          </div>
          <br></br>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </div>
          <button
            className="submit-btn"
            disabled={!formValues.email || !formValues.password}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
