import React, {
    Component
} from "react";
import "./style.css";
import TravelCard from "../TravelCard";
import {
    withRouter
} from 'react-router-dom'
import FormBtn from "../FormBtn";
import API from "../../utils/API";
// import { resolve } from "url";

class Listing extends Component {

    constructor(props) {
        super(props);
    }

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

    formatResultData = data => {
        let resData = [];
        data.forEach(function (item, i) {
            resData.push(item);
        }
        );
        return resData;
    };

    getSaveListing = () => {
        const params = {
            email: "aaa"
        };

        API.getTravelsPreference2(params)
            .then(res => {
                let restData = this.formatResultData(res.data);
                console.log("***" + JSON.stringify(res))
                this.setState({
                    detailsData: restData,
                    email: this.state.email
                });
                this.render();
            })
            .catch(err => console.log(err));
    }


    componentDidMount() {
        // TODO: get data from database
        console.log("component mount");
        const params = {
            email: "aaa"
        };
        this.getSaveListing(params);
    }

    render() {
        console.log("listing***");
        let email = "";
        console.log("**", this.state.detailsData);
        if (this.props.history.location.state) {
            email = this.props.history.location.state.email;
            // console.log("email: " + email);
            // this.state.email = email;
        }
        console.log("here");
        return (

            <div className="fill result-image">
                <div className="clearfix">
                    <div id="action-div">
                        <FormBtn name="search" onClick={this.handleFormSubmitSearch}>Search again</FormBtn>
                    </div>
                </div>
                <div className="container" id="content">
                    <div className="row-div col-md-12">
                        <h2 class="text-center">Your save listing</h2>
                        {this.state.detailsData ? this.state.detailsData.map(detail => (
                            <TravelCard rec={detail} key={detail.phone}
                            />
                        )) : <p>No Results Found</p>}
                    </div>
                </div>
            </div>
        )
        // return (<h2>hello</h2>);
    }
    // }
}

//export default (Listing);
export default withRouter(Listing);