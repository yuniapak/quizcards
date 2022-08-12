import { useEffect } from "react";
import axios from "axios";

const Card = (props) => {
  return (
    <div>
      <li className="country-item" id={props.name}>
        <h3>Country: {props.name}</h3>
        <h5>Capital: {props.capital}</h5>
      </li>
    </div>
  );
};

export default Card;
