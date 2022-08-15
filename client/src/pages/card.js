import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Card = ({ cardsObj, getCardbyType, subject }) => {
  cardsObj.map((card) => console.log(card));
  let navigate = useNavigate();

  const editCard = (card) => {
    navigate(`${card.Id}`, { state: { card: card } });
    console.log(cardsObj);
  };

  const deleteCard = async (id) => {
    let res = await axios
      .delete(`http://localhost:3001/api/card/${id}`)
      .catch((error) => console.log(error));
    console.log(res);
    await getCardbyType(subject);
  };

  return (
    <div>
      <p>Cards</p>
      {cardsObj.map((card) => (
        <div key={card.id}>
          <h1>Question: {card.question}</h1>
          <h1>Answer: {card.answer}</h1>
          <button onClick={() => editCard(card)}> Edit</button>
          <button onClick={() => deleteCard(card.id)}> Delete </button>
          <button onClick={() => navigate("/addCard")}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
