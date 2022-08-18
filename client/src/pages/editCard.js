import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditCard = (props) => {
  let location = useLocation()
  let navigate = useNavigate()

  const initialState = {
    id: `${location.state.card.id}`,
    type: `${location.state.card.type}`,
    question: `${location.state.card.question}`,
    answer: `${location.state.card.answer}`
  }

  const [cardEdit, setCardEdit] = useState({
    type: `${initialState.type}`,
    question: `${initialState.question}`,
    answer: `${initialState.answer}`
  })

  const makeEdits = async (editInfo) => {
    try {
      const res = await axios.put(
        `http://localhost:3001/api/card/${initialState.id}`,
        editInfo
      )
      console.log(res.data)
    } catch (err) {
      return err
    }
  }

  const handleChange = (event) => {
    setCardEdit({ ...cardEdit, [event.target.name]: event.target.value })
    console.log(cardEdit)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await makeEdits(cardEdit)
    //setCardEdit(cardEdit);
    console.log(cardEdit)
    navigate(`/card`)
  }

  return (
    <div className="main-div">
      <div className="Addcard">
        <h2>{initialState.type}</h2>
        <p> Change your card</p>
        <form onSubmit={handleSubmit}>
          <label id="form-select" htmlFor="SubjectType"></label>
          <br></br>
          Question :<br></br>
          &nbsp;&nbsp;
          <input
            className="addCard-input"
            name="question"
            type="text"
            placeholder={initialState.question}
            defaultValue={initialState.question}
            contentEditable="true"
            onChange={handleChange}
          ></input>
          <br></br>
          Answer:
          <br></br>
          &nbsp;&nbsp;&nbsp;
          <input
            className="addCard-input"
            name="answer"
            type="text"
            placeholder={initialState.answer}
            defaultValue={initialState.answer}
            contentEditable="true"
            onChange={handleChange}
          ></input>
          <br></br>
          <br></br>
          <button className="setting-btn" type="submit">
            Make Changes
          </button>
        </form>
      </div>
    </div>
  )
}
export default EditCard
