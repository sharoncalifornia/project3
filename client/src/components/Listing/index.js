import React, {
    Component
} from "react";
import "./style.css";
import TravelCard from "../../components/TravelCard";
import {
    withRouter
} from 'react-router-dom'
import FormBtn from "../FormBtn";
// import API from "../../utils/API";

class Listing extends Component {

    // constructor(props) {
    //     super(props);
    // }

    state = {
        detailsData: [],
        email: ""
    }

    // allow back to search page
    handleFormSubmitSearch = event => {
        event.preventDefault();
        const history = this.props.history;
        history.push({
            pathname: "/",
            email: this.state.email
        });
    };

    handleFormSubmitSave = event => {
        event.preventDefault();
        console.log("form submit");
    };

    getSaveListing = () => {
        let rec = {};
        let myArray = []
        rec.name = "UCSD";
        rec.phone = "(858) 452 - 9393";
        rec.rating = "4";
        rec.price = "$$$";
        rec.image_url = "";
        rec.address = {};
        rec.address.street = "9500 Gilman Drive";
        rec.address.city = "La Jolla";
        rec.address.state = "CA";
        rec.address.zipcode = "92093";
        let details = [];
        details.push(rec);
        this.setState({
            detailsData: details,
        })
    }

    componentDidMount() {
        // TODO: get data from database
        console.log("componentDidMount");
        this.getSaveListing();
    }

    render() {
        let email = "";
        if (this.props.history.location.state) {
            email = this.props.history.location.state.email;
            console.log("email: " + email);
            // this.setState({email: email});
            this.state.email = email;
        }
       
        if (this.state.email === "")
            return (
                <h2>You don't have saved Listing</h2>)
        else {
            return (
                <div className="fill result-image">
                    <div className="clearfix">
                        <div id="action-div">
                            <FormBtn name="search" onClick={this.handleFormSubmitSearch}>Search again</FormBtn>
                        </div>
                    </div>
                    <div className="container" id="content">
                        <div className="row-div col-md-12">
                            <div className="col-md-2"></div>
                            {this.state.detailsData ? this.state.detailsData.map(detail => (
                                <TravelCard rec={detail} key={detail.phone}
                                />
                            )) : <p>No Results Found</p>}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

//export default (Listing);
export default withRouter(Listing);