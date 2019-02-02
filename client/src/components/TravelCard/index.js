import React from "react";
import "./style.css";

const TravelCard = ({ rec }) => (
  <div className="card col-md-4">
    <div className="card-image">
      <img src={rec.image_url} width="300" height="200" alt="img" />
    </div>
    <div className="card-body p-1">
      <h5 className="card-title">{rec.name}</h5>
      <div className="card-text p-0">

        <div className="d-flex flex-column">
          <div className="p-0 mb-0">Price: <span className="text-success dollar-font">{rec.price}</span></div>
          <div className="p-0 mb-0">Rating: {rec.rating}</div>
          <div className="p-0 mb-0">Phone: {rec.phone}</div>
          <div className="p-0 mb-0">Address: {rec.address.street}</div>
          <div className="pl-5 ml-5 mb-0">{rec.address.city}, {rec.address.zipcode}</div>
        </div>
      </div>
    </div>
  </div>
);

export default TravelCard;
