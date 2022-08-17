<<<<<<< HEAD


=======
>>>>>>> 0552816420b53eb8b9684fce5b617c089be2d986
import { useState, useEffect } from "react";
import axios from "axios";

const Quiz = ({ cardsObj, subject }) => {
  const [currentQuestion, setQuestion] = useState(0);
  const [currentScore, setScore] = useState(0);
  const [popup, setPopup] = useState(false);
  const [idOfCard, setIdOfCard] = useState("");

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

<<<<<<< HEAD

=======
>>>>>>> 0552816420b53eb8b9684fce5b617c089be2d986
  return (

    <div>
      <h2>Quizards Quizly Quiz Game!</h2>
      <p>Do you know the answers to these questions?</p>
      <h3>{subject}</h3>
      <div>
        {cardsObj.map((card) => (
          <div key={card.id}>
            <h3>{card.question}</h3>


            <input type="text" placeholder="Answer..." />
            <div>
<<<<<<< HEAD
              <button  onClick={showAnswer}>
                Check Answer
              </button>

              {popup && (
                <div id={card.id} className="answer-container" >
                  Answer:
                  {card.id}

=======
              <button id={card.id} onClick={showAnswer}>
                Check Answer
              </button>
              {popup && idOfCard == card.id ? (
                <div className="answer-container">
                  Answer:
                  {card.answer}
                  Did you get it correct?
>>>>>>> 0552816420b53eb8b9684fce5b617c089be2d986
                  <button
                    onClick={() => setPopup(false)}
                    className="answer-close-btn"
                  >
                    No
                  </button>
                  <button onClick={addScore} className="yes-btn">
                    Yes
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
<<<<<<< HEAD
      <div className="score">You scored {currentScore} </div>
      {/* <div>
        <button onClick={() => setPopup(!popup)}>'hello'</button>
        {popup && <div>content</div>}
      </div> */}
=======
      <div className="score">
        You Answered <span className="currentScore">{currentScore}</span>{" "}
        Correct
      </div>
>>>>>>> 0552816420b53eb8b9684fce5b617c089be2d986
    </div>
  );
};
export default Quiz;
