import React, { Component } from "react";
import "./style.css";
import SearchForm from "../SearchForm";

class Home extends Component {

    render() {
        return (
            <div className="fill main-image">
                <div id="content">
                    <div className="row-div col-md-12">
                        <SearchForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;