import React from "react";
import "./vacationCard.css";

const VacationCard = ({ title, photos, description, price, duration, location, alt }) => {
  return (
    <div className="vacationCard">

      <h1 className="vacationTitle">{title}</h1>

      <figure className="imageWrapper">
        <img className="image" src={photos[0]} alt={alt} />
      </figure>

      <div className="informationWrapper">
        <p className="vacationLocation information"><span className="bold">Location</span>: {location}</p>
        <p className="vacationDuration information"><span className="bold">Duration</span>: {duration} days</p>
        <p className="vacationPrice information"><span className="bold">Price Point</span>: {price}</p>
        <p className="vacationDescription"><span className="bold">Description</span>: {description}</p>

        <button className="contactButton">Contact us about this vacation</button>
      </div>

    </div>
  );
};

export default VacationCard;
