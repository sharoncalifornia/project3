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


class Result extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        detailsData: [],
        saveStatuses: [],
        checked: false
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
        this.setState({
            detailsData: this.props.location.state.details
        });
    }
    
    onCheckboxChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    console.log("checkmark click");
        this.setState({
          [name]: value
        });
      }
    
    render() {
        if (this.props.location.state != undefined) {
            return (
                <div className="fill result-image">
                    <div className="clearfix">
                        <div id="action-div">
                            <FormBtn name="search" onClick={this.handleFormSubmitSearch}>Search again</FormBtn>
                            <FormBtn name="save" onClick={this.handleFormSubmitSave}>Save to My Account</FormBtn>
                        </div>
                    </div>
                    <div className ="container" id="content">
                        <div className="row-div col-md-12">
                            {this.props.location.state.details ? this.props.location.state.details.map(detail => (
                                <TravelCard rec={detail}  key={detail.phone}
                                />
                            )) : <p>No Results Found</p>}
                        </div>
                    </div>
                </div>
            );
        } else
            return <h2> Page Load Error </h2>
    }
}

export default withRouter(Result);