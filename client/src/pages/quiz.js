import { useState, useEffect } from 'react'


const Quiz = ({ cardsObj, subject }) => {
  const [currentQuestion, setQuestion] = useState(0)
  const [currentScore, setScore] = useState(0)
  const[disable,setDisable] = useState(false)

  useEffect(() => {}, [])


  const buttonClicked = () =>{
setScore(currentScore + 1)
setDisable(true)
  }




  return (

    <div>
      <h2>Quizards Quizly Quiz Game!</h2>
      <p>Do you know the answers to these questions?</p>
      <h3>{subject}</h3>
      <div>
        {cardsObj.map((card) => (
          <div key={card.id}>
            <h3>{card.question}</h3>
            <input
       type = "text"
        placeholder = "Answer..."
       />
       <button onClick = {buttonClicked} disabled= {disable}> button</button>
          </div>
        ))}
       
      </div>

      <div className="score">You scored {currentScore} out of </div>
    </div>
  )
}

export default Quiz
