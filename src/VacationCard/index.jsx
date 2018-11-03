import React from "react";
import "./vacationCard.css";

const VacationCard = ({ title, photos, description }) => {
  return (
    <div className={"vacationCard"}>
      <h1>{title}</h1>
      <img src={photos[0]} alt={description} />
      <p>{description}</p>
    </div>
  );
};

export default VacationCard;
