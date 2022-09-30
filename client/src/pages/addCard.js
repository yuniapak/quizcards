import axios from 'axios'
import { useState } from 'react'
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
    console.log(cardData)

    const res = await axios.post(
      `https://quiz-cards-psql.herokuapp.com/api/card/${user.id}`,
      cardData
    )
    console.log(res)
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

          <input
            className="addCard-input"
            onChange={handleChange}
            name="type"
            type="text"
            placeholder="Add new Subject"
            //disabled={id !== ''}
            value={newCard.type}
          ></input>

          <input
            className="addCard-input"
            maxLength="50"
            onChange={handleChange}
            name="question"
            type="text"
            placeholder="Your question?"
            value={newCard.question}
            required
          />

          <input
            rows="6"
            cols="20"
            maxLength="50"
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
    </div>
  )
}
//test
export default AddCard
