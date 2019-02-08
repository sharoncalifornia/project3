import React from "react";
import "./style.css";
import Checkbox from "../Checkbox";
import API from "../../utils/API";

class TravelCard extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  state = {
    id: 0
  }

  myCheckboxChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log("checkmark click");
    this.setState({
      [name]: value
    });
    if (value) {
      API.saveTravelsLocation(this.props.rec)
        .then(result => {
          console.log("inside results page repsonse recieved", result.data._id);
          this.setState({ id: result.data._id })
        }).catch(error => console.log(error));
    }
    else {
      console.log(this.state.id);
      API.deleteTravelsLocation(this.state.id)
      .then(result => {
        console.log("inside results page delete", result.data._id);
        this.setState({ id: result.data._id })
      }).catch(error => console.log(error));
    }
  }

  render() {
    const {
      rec, 
    } = this.props;
    return (
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
                    label="Save to my account"
                    onCheckboxChange={this.myCheckboxChange}
                    key={rec.phone}
                    name={rec.phone}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
// const TravelCard = ({ rec, onCheckboxChange }) => (
//   <div className="card col-md-4">
//     <div className="card-image">
//       <img src={rec.image_url} width="300" height="200" alt="img" />
//     </div>
//     <div className="card-body p-1">
//       <h5 className="card-title">{rec.name}</h5>
//       <div className="card-text p-0">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-4">Price:</div>
//             <div className="col text-success dollar-font">{rec.price}</div>
//           </div>
//           <div className="row">
//             <div className="col-sm-4">Rating:</div>
//             <div className="col">{rec.rating}</div>
//           </div>
//           <div className="row">
//             <div className="col-sm-4">Phone:</div>
//             <div className="col">{rec.phone}</div>
//           </div>
//           <div className="row">
//             <div className="col-sm-4">Address:</div>
//             <div className="col">{rec.address.street}</div>
//           </div>
//           <div className="row justify-content-end">
//             <div className="col-md-8">{rec.address.city}, {rec.address.zipcode}</div>
//           </div>
//           <div className="row">
//             <div className="col-md-8">
//               <Checkbox
//                 label="Save"
//                 onCheckboxChange={onCheckboxChange}
//                 key={rec.phone}
//                 name={rec.phone}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//     );

export default TravelCard;
