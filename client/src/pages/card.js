import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Card = ({ cardsObj, getCardbyType, subject }) => {
  const [showCard, setShowCard] = useState(false);
  cardsObj.map((card) => console.log(card));
  let navigate = useNavigate();

  const editCard = (card) => {
    navigate(`${card.Id}`, { state: { card: card } });
    console.log(cardsObj);
  };
  useEffect(() => {
    getCardbyType(subject);
  }, []);

  useEffect(() => {
    getCardbyType(subject);
  }, []);

  const deleteCard = async (id) => {
    let res = await axios
      .delete(`http://localhost:3001/api/card/${id}`)
      .catch((error) => console.log(error));
    console.log(res);
    await getCardbyType(subject);
  };

  return (
    <div className="main-div">
      <button className="add-btn" onClick={() => navigate("/addCard")}>
        Add New Card
      </button>
      <div className="card-grid">
        {cardsObj.map((card) => (
          <div className="quiz-card" key={card.id}>
            <h1>{card.type.toUpperCase()}</h1>
            <h1 className="quiz-question">{card.question.toUpperCase()}?</h1>

            {showCard ? (
              <h1 className="quiz-answer">Answer: {card.answer}</h1>
            ) : null}
            <button className="quiz-edit-btn" onClick={() => editCard(card)}>
              Edit
            </button>
            <button
              className="quiz-delete-btn"
              onClick={() => deleteCard(card.id)}
            >
              Delete
            </button>
            <button onClick={() => setShowCard(!showCard)}>Show Card</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
