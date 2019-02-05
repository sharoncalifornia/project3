import React from "react";
import "./style.css";
import Checkbox from "../Checkbox";

const TravelCard = ({ rec, onCheckboxChange }) => (
  <div className="card col-md-4">
    <div className="card-image">
      <img src={rec.image_url} width="300" height="200" alt="img" />
    </div>
    <div className="card-body p-1">
      <h5 className="card-title">{rec.name}</h5>
      <div className="card-text p-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">Price:</div>
            <div className="col text-success dollar-font">{rec.price}</div>
          </div>
          <div className="row">
            <div className="col-sm-4">Rating:</div>
            <div className="col">{rec.rating}</div>
          </div>
          <div className="row">
            <div className="col-sm-4">Phone:</div>
            <div className="col">{rec.phone}</div>
          </div>
          <div className="row">
            <div className="col-sm-4">Address:</div>
            <div className="col">{rec.address.street}</div>
          </div>
          <div className="row justify-content-end">
            <div className="col-md-8">{rec.address.city}, {rec.address.zipcode}</div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <Checkbox
                label="Save"
                onChange={onCheckboxChange}
                key={rec.phone}
                name={rec.phone}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    );
    
    export default TravelCard;
