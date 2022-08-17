import { useState, useEffect } from 'react'
import axios from 'axios'

const Quiz = ({ cardsObj, subject }) => {
  const [currentQuestion, setQuestion] = useState(0)
  const [currentScore, setScore] = useState(0)
  const [popup, setPopup] = useState(false)
  const [idOfCard, setIdOfCard] = useState('')

  const showAnswer = (e) => {
    setPopup(true)
    setIdOfCard(e.target.id)
    console.log(idOfCard)
  }

  const addScore = () => {
    setScore(currentScore + 1)
    setPopup(false)
  }

  useEffect(() => {}, [])

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
              <button id={card.id} onClick={showAnswer}>
                Check Answer
              </button>
              {popup && idOfCard == card.id ? (
                <div className="answer-container">
                  Answer:
                  {card.answer}
                  Did you get it correct?
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
      <div className="score">
        You Answered <span className="currentScore">{currentScore}</span>{' '}
        Correct
      </div>
    </div>
  )
}
export default Quiz
