const Card = ({ cardsObj }) => {
  cardsObj.map((card) => console.log(card))

  return (
    <div>
      <p>Card</p>
      {cardsObj.map((card) => (
        <div key={card.id}>
          <h1>{card.question}</h1>
        </div>
      ))}
    </div>
  )
}

export default Card
