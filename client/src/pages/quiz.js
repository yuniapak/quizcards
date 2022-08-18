import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Quiz = ({ cardsObj, subject }) => {
  const [currentQuestion, setQuestion] = useState(0);
  const [currentScore, setScore] = useState(0);
  const [popup, setPopup] = useState(false);
  const [idOfCard, setIdOfCard] = useState("");

  let navigate = useNavigate();

  const showAnswer = (e) => {
    setPopup(true);
    setIdOfCard(e.target.id);
    console.log(idOfCard);
  };

  const addScore = () => {
    setScore(currentScore + 1);
    setPopup(false);
  };

  useEffect(() => {}, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="main-div">
      <h2>Quizards Quizly Quiz!</h2>

      <h2>{subject}</h2>
      <div>
        {cardsObj.map((card) => (
          <div className="questions-container" key={card.id}>
            <h2>Test Your Knowledge!</h2>
            <h3>{card.question}</h3>
            <input type="text" placeholder="Answer" />
            <div>
              <button
                className="check-answer-btn"
                id={card.id}
                onClick={showAnswer}
              >
                Check Answer
              </button>
              {popup && idOfCard == card.id ? (
                <div className="answer-container">
                  <div className="answer-content">
                    Answer:
                    <div className="answer-text">{card.answer}</div>
                    Did you get it correct?
                    <br></br>
                    <button onClick={() => setPopup(false)} className="no-btn">
                      No
                    </button>
                    <button onClick={addScore} className="yes-btn">
                      Yes
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="score">
        You Answered <span className="currentScore">{currentScore}</span>{" "}
        Correct
      </div>

      <button className="enter-quiz-btn" onClick={scrollToTop}>
        Back to top
      </button>
      <button className="enter-quiz-btn" onClick={() => navigate("/Card")}>
        Back
      </button>
    </div>
  );
};
export default Quiz;
