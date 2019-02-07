import React, {
    Component
} from "react";
import "./style.css";
import TravelCard from "../../components/TravelCard";
import {
    withRouter
} from 'react-router-dom'
import FormBtn from "../FormBtn";
import API from "../../utils/API";


class Listing extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        detailsData: [],
        email: ""
    }

    handleFormSubmitSearch = event => {
        event.preventDefault();
        const history = this.props.history;
        history.push({
            pathname: "/",
        });
    };

    handleFormSubmitSave = event => {
        event.preventDefault();
        console.log("inside the submit form===",this.state.detailsData[0]);
        if (this.state.detailsData[0].name) {
            API.saveTravelsLocation({
                name: this.state.detailsData[0].name,
                category: this.state.detailsData[0].category,
                description: this.state.detailsData[0].description,
                rating: this.state.detailsData[0].rating,
                price: this.state.detailsData[0].price,
                address: {
                    street: this.state.detailsData[0].street,
                    city: this.state.detailsData[0].city,
                    state: this.state.detailsData[0].state,
                    zipcode: this.state.detailsData[0].zipcode
                },
                phone: this.state.detailsData[0].phone,
                image_url: this.state.detailsData[0].image_url

            }).then(result => {
                console.log("inside results page repsonse recieved", result)
            }).catch(error => console.log(error));


            // call api to add data to DB
        }
    };

    componentDidMount() {
        // this.setState({
        //     detailsData: this.props.location.state.details
        // });
        // get from database
        // this.datailsData[0] = ""
        // name: this.state.detailsData[0].name,
        // category: this.state.detailsData[0].category,
        // description: this.state.detailsData[0].description,
        // rating: this.state.detailsData[0].rating,
        // price: this.state.detailsData[0].price,
        // address: {
        //     street: this.state.detailsData[0].street,
        //     city: this.state.detailsData[0].city,
        //     state: this.state.detailsData[0].state,
        //     zipcode: this.state.detailsData[0].zipcode
        // },
        // phone: this.state.detailsData[0].phone,
        // image_url: this.state.detailsData[0].image_url
        // get from database
    }
    
    render() {
        let email="";
        if (this.props.history.location.state) {
            email = this.props.history.location.state.email;
            console.log("email: "+ email);
            this.state.email = email;
        }
        if (email === "")
        return (
            <h2>no Listing</h2>)
        else
            return (
            <h2>show listing</h2>
            )
        //     return (
        //     <div className="container-fluid col-md-3 mt-5">
        //     <form className="dest-form">
        //         <div className="form-group row">
        //             <label htmlFor="destination" className="col-form-label">Destination</label>
        //             <input className="form-control" name="city_zip" placeholder="City or Zipcode"
        //                 value={this.state.city_zip}
        //                 onChange={this.handleInputChange} required />
        //         </div>

        //         <div className="form-group row">
        //             <label htmlFor="nearby" className="col-form-label">Beach,&nbsp;Mountain,&nbsp;By the airport</label>
        //             <input className="form-control" name="nearby" placeholder="General preferences"
        //                 value={this.state.nearby}
        //                 onChange={this.handleInputChange} required />
        //         </div>

        //         <div className="form-group row">
        //             <label htmlFor="find" className="col-form-label my-0">Find:</label>
        //             <div className="col-sm-12 ml-5">
        //                 {this.createCheckboxes()}
        //                 <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
        //             </div>
        //         </div>
        //     </form >
        // </div >
        //     );
    //-----
        // if (this.props.location.state != undefined) {
        //     return (
        //         <div className="fill result-image">
        //             <div className="clearfix">
        //                 <div id="action-div">
        //                     <FormBtn name="search" onClick={this.handleFormSubmitSearch}>Search again</FormBtn>
        //                     <FormBtn name="save" onClick={this.handleFormSubmitSave}>Save to My Account</FormBtn>
        //                 </div>
        //             </div>
        //             <div className ="container" id="content">
        //                 <div className="row-div col-md-12">
        //                     {this.props.location.state.details ? this.props.location.state.details.map(detail => (
        //                         <TravelCard rec={detail}  key={detail.phone}
        //                         />
        //                     )) : <p>No Results Found</p>}
        //                 </div>
        //             </div>
        //         </div>
        //     );
        // } else
        //     return <h2> Page Load Error </h2>
    }
}

export default withRouter(Listing);