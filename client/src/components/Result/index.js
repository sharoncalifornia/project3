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
        detailsData: [],
        saveStatuses: []
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
        console.log("save, call API");
        // call api to add data to DB
    };

    componentDidMount() {
        this.setState({ detailsData: this.props.location.state.details });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
    render() {
        if (this.props.location.state !== undefined) {
            return (
                <div className="fill result-image">
                    <div className="clearfix">
                        <div id="action-div">
                            <FormBtn name="search" onClick={this.handleFormSubmitSearch}>Search again</FormBtn>
                            <FormBtn name="save" onClick={this.handleFormSubmitSave}>Save to My Account</FormBtn>
                        </div>
                    </div>
                    <div id="content">
                        <div className="row-div col-md-12">
                            {this.props.location.state.details.map(detail => (
                                <TravelCard rec={detail} onCheckboxChange={this.handleCheckboxChange} key={detail.phone}
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