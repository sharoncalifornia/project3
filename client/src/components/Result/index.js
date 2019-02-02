import React, { Component } from "react";
import "./style.css";
import TravelCard from "../../components/TravelCard";
import { withRouter } from 'react-router-dom'
import FormBtn from "../FormBtn";

class Result extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        externalData: [],
    }

    handleFormSubmit = event => {
        //const history = this.props.history;

        event.preventDefault();
        console.log("handle submit: "+event.target);
    };

    render() {
        if (this.props.location.state !== undefined) {
            this.state.externalData = this.props.location.state.details;
            return (
                <div className="fill result-image">
                    <div className="clearfix">
                        <div id="action-div">
                            <FormBtn onClick={this.handleFormSubmit}>Search again</FormBtn>
                            <FormBtn onClick={this.handleFormSubmit}>Save to My Account</FormBtn>
                        </div>
                    </div>
                    <div id="content">

                        <div className="row-div col-md-12">
                            {this.props.location.state.details.map(detail => (
                                <TravelCard rec={detail} key={detail.phone}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
        else
            return <h2>Page Load Error</h2>
    }
}

export default withRouter(Result);