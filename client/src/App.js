import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import AddCard from "./pages/addCard";
import Card from "./pages/card";
import EditCard from "./pages/editCard";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Quiz from "./pages/quiz";
import Register from "./pages/register";
import axios from "axios";
import Client from "./services/api";

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [cardsObj, setCardsObj] = useState([]);

  const signIn = async (data) => {
    try {

      const result = await Client.post(`/auth/login`, data)
      localStorage.setItem('token', result.data.token)
      console.log(result.data.user)
      return result.data.user

    } catch (error) {
      console.log("checkout session");
      throw error;
    }
  };

  const checkSession = async () => {
    try {
      const res = await Client.get("/auth/session");
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const handleLogOut = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  const checkToken = async () => {
    const user = await checkSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, []);

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
          <Route path="/AddCard" element={<AddCard user={user} />} />
          <Route path="/Card" element={<Card cardsObj={cardsObj} />} />
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
          <Route
            path="/Profile"
            element={<Profile setCardsObj={setCardsObj} user={user} />}
          />
          <Route path="/Card/Quiz" element={<Quiz />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
