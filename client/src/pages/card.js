import { useEffect } from "react";
import axios from "axios";

const Card = (props) => {
  console.log(props.onclick);
  return (
    <div>
      <p>{props.onClick}</p>
    </div>
  );
};

export default Card;
