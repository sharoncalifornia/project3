import React, { Component } from "react";
import "./style.css";
import { withRouter } from 'react-router-dom'

class Result extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.location.state.detail);
        return (
            <div className="fill result-image">
                <div id="content">
                    <div className="row-div col-md-12">

                        <h4>{this.props.location.state.detail}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Result);