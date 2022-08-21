import studyImg from '../images/lighbulb.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="main-div">
      <div className="home-card">
        <main className="image-textContainer">
          <h1 className="main-h1">Ready to study?</h1>
          <h1 className="main-h1">Don't know where to start</h1>
          <h1 className="question">?</h1>
          <h2 className="main-h2">Take a Quiz</h2>
          <Link className="main-btn" to="/login">
            Login
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home
