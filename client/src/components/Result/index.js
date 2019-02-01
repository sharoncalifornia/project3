import React, { Component } from "react";
import "./style.css";
import TravelCard from "../../components/TravelCard";
import { withRouter } from 'react-router-dom'

class Result extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        externalData: null,
    }



    getData() {
        // var rec = {};
        // rec.name = this.props.location.state.details[0].name;
        // rec.rating = this.props.location.state.details[0].rating;
        // rec.phone = this.props.location.state.details[0].phone;
        // rec.address.street  = this.props.location.state.details[0].address.street;
        // rec.address.city = this.props.location.state.details[0].address.city;
        // rec.address.zipcode = this.props.location.state.details[0].address.zipcode;
        // return (
        //     <div>TravelCard</div>
        // )
        return (<div>
            <h2>{this.props.location.state.details[0].name}</h2>
            <h2>{this.props.location.state.details[0].rating}</h2>
            <h2>{this.props.location.state.details[0].phone}</h2>
            <h2>{this.props.location.state.details[0].address.street}</h2>
            <h2>{this.props.location.state.details[0].address.city}</h2>
            <h2>{this.props.location.state.details[0].address.zipcode}</h2>
        </div>);
    }

    render() {
        console.log("render");
        console.log(this.props.location.state.details);
        // if (this.state.externalData != null) {
        // if (this.state.externalData == null) return null;
        // else
        return (
            <div className="fill result-image">
                <div id="content">
                    <div className="row-div col-md-12">
                        {this.props.location.state.details.map(detail => (
                            <TravelCard rec={detail}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Result);