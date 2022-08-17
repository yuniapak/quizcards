
import { useState, useEffect } from "react";
import axios from "axios";

const Quiz = ({ cardsObj, subject }) => {
  const [currentQuestion, setQuestion] = useState(0);
  const [currentScore, setScore] = useState(0);
  const [popup, setPopup] = useState(false);
  const [idOfCard, setIdOfCard] = useState(null);

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


  // const nextQuestion = currentQuestion + 1;
  // if(nextQuestion < question.length){
  //   setQuestion(nextQuestion)
  // }else{
  //   setScore(true)
  // }

  // const buttonClicked = () =>{
  // if (isCorrect === true){
  //   setScore(currentScore + 1)
  // }
  // }

  return (
    <div>
      <h2>Quizards Quizly Quiz Game!</h2>
      <p>Do you know the answers to these questions?</p>
      <h3>{subject}</h3>
      <div>
        {cardsObj.map((card) => (
          <div key={card.id}>
            <h3>{card.question}</h3>

            <input type="text" value="Answer..." />
            <div>
              <button id={card.Id} onClick={showAnswer}>
                Check Answer
              </button>
              {popup && (
                <div className="answer-container">
                  Answer:
                  {card.answer}
                  <button
                    onClick={() => setPopup(false)}
                    className="answer-close-btn"
                  >
                    Close
                  </button>
                  <button onClick={addScore} className="yes-btn">
                    Yes
                  </button>
                  <button className="no-btn">No</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="score">You scored {currentScore} out of </div>
      {/* <div>
        <button onClick={() => setPopup(!popup)}>'hello'</button>
        {popup && <div>content</div>}
      </div> */}
    </div>
  );
};
export default Quiz;

