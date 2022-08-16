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
import Client from './services/api'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [cardsObj, setCardsObj] = useState([])
  const [subject, setSubject] = useState('')
  const [loading, setLoading] = useState(true)
  const [types, setTypes] = useState([])
  let currentTypes = []
  const signIn = async (data) => {
    try {
      const result = await Client.post(`/auth/login`, data)
      localStorage.setItem('token', result.data.token)
      console.log(result.data.user)
      return result.data.user
    } catch (error) {
      console.log('checkout session')
      throw error
    }
  }

  const checkSession = async () => {
    try {
      const res = await Client.get('/auth/session')
      return res.data
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

  const getTypes = async () => {
    try {
      let result = await axios.get(
        `http://localhost:3001/api/card/card/${user.id}`
      )
      result.data.map(({ type }) => {
        currentTypes.push(type)
      })
      console.log([...new Set(currentTypes)])
      setTypes(
        [...new Set(currentTypes)].map((type) => ({ label: type, value: type }))
      )
      setLoading(false)
    } catch (error) {
      return error
    }
  }

  const getCardbyType = async (subject) => {
    try {
      let res = await axios.get(
        `http://localhost:3001/api/card/find/${user.id}/${subject}`
      )
      console.log(res.data)
      //setting result to useState to pass through
      setCardsObj(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="main-container">
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
          <Route
            path="/AddCard"
            element={<AddCard user={user} loading={loading} types={types} />}
          />
          <Route
            path="/Card"
            element={
              <Card
                cardsObj={cardsObj}
                getCardbyType={getCardbyType}
                subject={subject}
              />
            }
          />
          <Route path="/Card/*" element={<EditCard />} />
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
          <Route
            path="/Profile"
            element={
              <Profile
                setCardsObj={setCardsObj}
                user={user}
                authenticated={authenticated}
                setSubject={setSubject}
                getCardbyType={getCardbyType}
                subject={subject}
                getTypes={getTypes}
                types={types}
                loading={loading}
              />
            }
          />
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
