import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Card = ({ cardsObj, getCardbyType, subject }) => {
  const [showCard, setShowCard] = useState(false)
  const [idOfCard, setIdOfCard] = useState('')
  cardsObj.map((card) => console.log(card))
  let navigate = useNavigate()

  const editCard = (card) => {
    navigate(`${card.Id}`, { state: { card: card } })
    console.log(cardsObj)
  }
  useEffect(() => {
    getCardbyType(subject)
  }, [])

  const deleteCard = async (id) => {
    let res = await axios
      .delete(`https://quiz-cards-psql.herokuapp.com/api/card/${id}`)
      .catch((error) => console.log(error))
    console.log(res)
    await getCardbyType(subject)
  }

  const cardShow = (e) => {
    setShowCard(true)
    setIdOfCard(e.target.id)
    console.log(e)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="main-div">
      <div className="card-top-buttons">
        <button className="enter-quiz-btn" onClick={() => navigate('/Quiz')}>
          Quiz
        </button>
        <button className="add-btn" onClick={() => navigate('/addCard')}>
          Add New Card
        </button>
      </div>
      <div className="card-grid">
        {cardsObj.map((card) => (
          <div className="quiz-card" key={card.id}>
            <h1 className="quiz-type">{card.type}</h1>
            <h1 className="quiz-question">{card.question.toUpperCase()}</h1>

            {showCard && idOfCard === card.id ? (
              <h1 className="quiz-answer"> {card.answer}</h1>
            ) : null}
            <button className="quiz-show-btn" id={card.id} onClick={cardShow}>
              Answer
            </button>

            <br></br>
            <button
              className="quiz-delete-btn"
              onClick={() => deleteCard(card.id)}
            >
              Delete
            </button>

            <button className="quiz-edit-btn" onClick={() => editCard(card)}>
              Edit
            </button>
          </div>
        ))}
      </div>
      <button className="enter-quiz-btn" onClick={scrollToTop}>
        Back to top
      </button>
    </div>
  )
}

export default Card
