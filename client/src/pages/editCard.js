import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const EditCard = (props) => {
  let location = useLocation();

  const initialState = {
    id: `${location.state.card.id}`,
    type: `${location.state.card.type}`,
    question: `${location.state.card.question}`,
    answer: `${location.state.card.answer}`,
  };

  const [cardEdit, setCardEdit] = useState({
    type: "",
    question: "",
    answer: "",
  });

  const makeEdits = async (editInfo) => {
    try {
      const res = await axios.put(
        `http://localhost:3001/api/card/${initialState.id}`,
        editInfo
      );
      console.log(res.data);
    } catch (err) {
      return err;
    }
  };

  const handleChange = (event) => {
    setCardEdit({ ...cardEdit, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await makeEdits(cardEdit);

    console.log(cardEdit);
  };

  return (
    <div>
      <div>
        <p> (Current) </p>
        <h2>{initialState.type}</h2>
        <p>Question : {initialState.question}</p>
        <p>Answer: {initialState.answer}</p>
      </div>
      <br></br>
      <br></br>
      <div>
        <p> Make Changes Below</p>
        <form onSubmit={handleSubmit}>
          <label id="form-select" htmlFor="SubjectType"></label>
          Question :&nbsp;&nbsp;
          <input
            name="question"
            type="text"
            placeholder={initialState.question}
            onChange={handleChange}
            dafaultValue="test"
          ></input>
          <br></br>
          <br></br>
          Answer : &nbsp;&nbsp;&nbsp;
          <input
            name="answer"
            type="text"
            placeholder={initialState.answer}
            onChange={handleChange}
            defautltValue={initialState.answer}
          ></input>
          <br></br>
          <br></br>
          <button type="submit">Make Changes</button>
        </form>
      </div>
    </div>
  );
};
export default EditCard;
