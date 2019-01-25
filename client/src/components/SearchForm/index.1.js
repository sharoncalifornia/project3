import React from "react";

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
                <form class="dest-form p-2 mt-2">
                    <div class="form-group destination_name">
                        <input class="form-control" id="name" placeholder="City, Zip" required />
                        <h4><label>Your Destination</label></h4>
                    </div>
                    <div className="form-group description">
                        <input class="form-control" id="preference" placeholder="General preference" required />
                        <h4><label>Beach, Mountains, By the airport</label></h4>
                    </div>
                    <div className="form-group instruct">
                        <div className="form-group category">
                            <h4><label for="selections">Find:</label></h4>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" value="">
                                        <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                        Restaurant </input>
                                    </label>
                                </div>
</div>
                                <select className="form-control" id="category">
                                    <checkbox value="" disabled selected>Select an Option</checkbox>
                                    <checkbox a
                                <option value="2">Bars</option>
                                <option value="3">Meetups</option>
                                <option value="4">Hotels</option>
                                <option value="5">Recreations</option>
                                <option value="6">Others</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary submit">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchForm;