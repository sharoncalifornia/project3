import React from "react";
import "./style.css";

const TravelCard = ({ rec }) => (
  <div className="card md-5">
    <image className="card-img" src="{rec.url_image}" alt="Card image cap"></image>
    <div className="card-body">
      <h5 className="card-title">{rec.name}</h5>
      <p className="card-text">Address: {rec.address.city}</p>
    </div>
  </div>

);

export default TravelCard;
