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
import Settings from './pages/settings'
import axios from 'axios'
import { CheckSession } from './services/Auth'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [cardsObj, setCardsObj] = useState([])
  const [subject, setSubject] = useState('')
  const [loading, setLoading] = useState(true)
  const [types, setTypes] = useState([])
  const [userName, setUserName] = useState('')
  let currentTypes = []

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    console.log('user token exist', user)
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      console.log(token)
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
                // signIn={signIn}
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
                setUserName={setUserName}
                userName={userName}
              />
            }
          />
          <Route
            path="/Quiz"
            element={<Quiz cardsObj={cardsObj} subject={subject} />}
          />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/Settings"
            element={<Settings user={user} userName={userName} />}
          />
        </Routes>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
