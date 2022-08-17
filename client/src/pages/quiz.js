import { useState, useEffect } from 'react'
import axios from 'axios'

const Quiz = ({ cardsObj, subject }) => {
  const [currentQuestion, setQuestion] = useState(0)
  const [currentScore, setScore] = useState(0)

  useEffect(() => {}, [])

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
            <p>{card.answer}</p>
          </div>
        ))}

        <h2></h2>
        <button></button>
      </div>

      <div className="score">You scored {currentScore} out of </div>
    </div>
  )
}

export default Quiz
