import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCard = ({ user }) => {
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
    await addNewCard({
      type: newCard.type,
      question: newCard.question,
      answer: newCard.answer
    })
    setNewCard({
      type: '',
      question: '',
      answer: ''
    })
    //props.onSubmit(e)
    navigate('/Card')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label id="form-select" htmlFor="SubjectType">
          Add Card
          <br></br>
        </label>
        <br></br>
        <select id="value" onChange={handleChange} value={newCard.type}>
          <option value="" disabled hidden>
            Selection
          </option>
          <option value="Math">Math</option>
          <option value="History">History</option>
          <option value="Science">Science </option>
          <option value="Literature">Literature </option>
          <option value="Art">Art </option>
        </select>
        <br></br>
        <input
          onChange={handleChange}
          name="question"
          type="text"
          placeholder="How many turtlest in ocean?"
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
