import React from "react";
import "./PictureCard.css";

const PictureCard = props => {
  console.log(props);
  return <div className="card">
    <div className="img-container">
      <img onClick={() => props.checkPictureId(props.id)} alt={props.name} src={props.image} />
    </div>
  </div>
};

export default PictureCard;