import React, { Component } from "react";
import "./style.css";

class Result extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="fill result-image">
                <div id="content">
                    <div className="row-div col-md-12">
                        <h2>Results</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;