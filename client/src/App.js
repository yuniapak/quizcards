import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/home'
import AddCard from './pages/addCard'
import Card from './pages/card'
import EditCard from './pages/editCard'
import Login from './pages/login'
import Profile from './pages/profile'
import Quiz from './pages/quiz'
import Register from './pages/register'
import axios from 'axios'

// const linkStyle = {
//   margin: "1rem",
//   textDecoration: "none",
//   color: "white",
// };

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const signIn = async (data) => {
    try {
      const result = await axios.post(
        `http://localhost:3001/api/auth/login`,
        data
      )
      localStorage.setItem('token', result.data.token)
      console.log(result.data.user)
      return result.data.user
    } catch (error) {
      throw error
    }
  }

  const checkSession = async () => {
    try {
      const result = await axios.get(`http://localhost:3001/api/auth/session`)
      console.log(result.data)
      return result.data
    } catch (error) {
      throw error
    }
  }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await checkSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <nav>
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddCard" element={<AddCard />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Card/:id" element={<EditCard />} />
          <Route
            path="/Login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
                signIn={signIn}
              />
            }
          />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Card/Quiz" element={<Quiz />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
