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

// const linkStyle = {
//   margin: "1rem",
//   textDecoration: "none",
//   color: "white",
// };

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogOut = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddCard" element={<AddCard />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Card/:id" element={<EditCard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
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
