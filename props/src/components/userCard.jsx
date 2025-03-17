import React from "react";
import "./userCard.css";

const userCard = (props) => {
  return (
    <div className="user-container" style={props.style}>
      <p id="user-title">{props.name}</p>
      <img title="user-pic" src="" alt="ganesh" />
      <p title="user-dep">
        I am {props.name} from {props.place}
      </p>
    </div>
  );
};

export default userCard;
