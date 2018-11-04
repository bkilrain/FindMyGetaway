import React from "react";
import "./vacationCard.css";

const VacationCard = ({ title, photos, description, price, duration, location, alt }) => {
  return (
    <div className="vacationCard">
      <div className="vacationInformation">
        <h1 className="vacationTitle">{title}</h1>
        <p className="vacationLocation"><span className="bold">Location</span>: {location}</p>
        <p className="vacationDuration"><span className="bold">Duration</span>: {duration} days</p>
        <p className="vacationPrice"><span className="bold">Price Point</span>: {price}</p>
        <p className="vacationDescription"><span className="bold">Description</span>: {description}</p>
      </div>

      <figure className="imageWrapper">
        <img className="image" src={photos[0]} alt={alt} />
      </figure>

    </div>
  );
};

export default VacationCard;
