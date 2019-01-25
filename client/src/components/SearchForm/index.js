import React from "react";
import "./style.css";

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            zipcode: 0
        }
    }

    render() {
        return (
            <div className="container form-div col-6">
                <form class="dest-form p2 m2">
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="name" placeholder="City, Zip" required />
                        </div>
                        <label for="destination" className="col-sm-6 col-form-label">Destination</label>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="preference" placeholder="General preferences" required />
                        </div>
                        <label for="nearby" class="col-sm-6 col-form-label">Beach&nbsp;,By the airport</label>
                    </div>
                    <div className="form-group instruct">
                        <div className="form-group category">
                            <h4><label for="selections">Find:</label></h4>
                            <select className="form-control" id="category">
                                <option value="" disabled selected>Select an Option</option>
                                <option value="1">Restaurants</option>
                                <option value="2">Bars</option>
                                <option value="3">Meetups</option>
                                <option value="4">Hotels</option>
                                <option value="5">Recreations</option>
                                <option value="6">Others</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary submit">Search</button>
                    </div>
                </form >
            </div >
        );
    }
}

export default SearchForm;