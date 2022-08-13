import { useLocation } from 'react-router-dom'

const Card = () => {
  let location = useLocation()
  console.log(location.state.cards)
  const initialState = {
    question: `${location.state.cards.question}`
  }
  // cardsObj.map((card) => console.log(card))
  // console.log(cardsObj)
  return (
    <div>
      <p>Card</p>
      <h1>{initialState.question}</h1>
    </div>
  )
}

export default Card
