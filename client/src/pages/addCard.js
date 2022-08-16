import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCard = ({ user, loading, types }) => {
  console.log(user)
  const [newCard, setNewCard] = useState({
    type: '',
    question: '',
    answer: ''
  })

  const handleChange = (event) => {
    setNewCard({ ...newCard, [event.target.name]: event.target.value })
    console.log(newCard)
  }

  const addNewCard = async (cardData) => {
    const res = await axios.post(
      `http://localhost:3001/api/card/${user.id}`,
      cardData
    )
    console.log(res.cardData)
  }

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addNewCard(newCard)
    console.log(newCard)
    setNewCard({
      type: '',
      question: '',
      answer: ''
    })
    //navigate for now, maybe change to different page later
    navigate('/Profile')
  }

  return (
    <div className="main-div">
      <div className="Addcard">
        <form onSubmit={handleSubmit}>
          <label id="form-select" htmlFor="SubjectType">
            <br></br>
          </label>
          <br></br>
          <select
            id="value"
            name="type"
            onChange={handleChange}
            value={newCard.type}
            disabled={loading}
          >
            <option value="" disabled hidden>
              Selection
            </option>
            {types.map(({ value, label }) => (
              <option value={value}>{label}</option>
            ))}
            <option value={newCard.type}>NewSubject</option>
          </select>
          <br></br>
          <br></br>
          <br></br>
          New Subject<br></br>
          <input
            className="addCard-input"
            onChange={handleChange}
            name="type"
            type="text"
            placeholder="Add new Subject"
            //disabled={id !== ''}
            value={newCard.type}
          ></input>
          <br></br>
          Question
          <br></br>
          <input
            className="addCard-input"
            onChange={handleChange}
            name="question"
            type="text"
            placeholder="Your question?"
            value={newCard.question}
            required
          />
          <br></br>
          Answer
          <br></br>
          <input
            rows="6"
            cols="50"
            className="addCard-input"
            onChange={handleChange}
            name="answer"
            type="text"
            placeholder="Answer"
            value={newCard.answer}
            required
          />
          <button
            className="addCard-btn"
            type="submit"
            disabled={!newCard.question || !newCard.answer}
            // onClick={handleSubmit()}
          >
            Submit
          </button>
        </form>
      </div>
      >>>>>>> 4f30548 (addcard styled)
    </div>
  )
}

export default AddCard
