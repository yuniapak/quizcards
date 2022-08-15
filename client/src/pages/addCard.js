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
    <div>
      <form onSubmit={handleSubmit}>
        <label id="form-select" htmlFor="SubjectType">
          Add Card
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
        <input
          onChange={handleChange}
          name="type"
          type="text"
          placeholder="Add new Subject"
          //disabled={id !== ''}
          value={newCard.type}
        ></input>
        <input
          onChange={handleChange}
          name="question"
          type="text"
          placeholder="Your question?"
          value={newCard.question}
          required
        />
        <input
          onChange={handleChange}
          name="answer"
          type="text"
          placeholder="Answer"
          value={newCard.answer}
          required
        />
        <button
          type="submit"
          disabled={!newCard.question || !newCard.answer}
          // onClick={handleSubmit()}
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddCard
