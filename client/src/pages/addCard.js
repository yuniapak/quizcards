import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCard = (props) => {
  const [newCard, setNewCard] = useState({
    subject: "",
    question: "",
    answer: "",
  });

  const handleChange = (event) => {
    setNewCard({ ...newCard, [event.tart.name]: event.target.value });
  };

  const addNewCard = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3001/", newCard);
    setNewCard({
      subject: "",
      question: "",
      answer: "",
    });
    console.log(newCard);
  };

  let navigate = useNavigate();

  const handleSubmite = (e) => {
    props.onSubmit(e);
    navigate("/card");
  };

  return <div>AddCard</div>;
};

export default AddCard;
