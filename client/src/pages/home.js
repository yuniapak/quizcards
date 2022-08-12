import studyImg from "../images/lighbulb.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <main className="image-textContainer">
        <h1 className="main-h1">Unlock Your Potential</h1>
        <Link className="main-btn" to="/login">
          Login
        </Link>
        <h2 className="main-h2">"Knowledge is Power!"</h2>
        <img className="main-image" src={studyImg} alt="image1" />
      </main>
    </div>
  );
};

export default Home;
