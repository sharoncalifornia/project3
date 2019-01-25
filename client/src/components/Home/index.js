import React, { Component } from "react";
import "./style.css";
import SearchForm from "../SearchForm";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="fill main-image">
                <div id="content">
                    <div class="row row-div">
                        <div class="content2 col-lg-11 offset-1"></div>
                        <SearchForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;