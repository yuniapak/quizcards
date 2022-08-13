const Card = ({ cardsObj }) => {
  cardsObj.map((card) => console.log(card))

  return (
    <div>
      <p>Cards</p>
      {cardsObj.map((card) => (
        <div key={card.id}>
          <h1>Question: {card.question}</h1>
          <h1>Answer: {card.answer}</h1>
        </div>
      ))}
    </div>
  )
}

export default Card
