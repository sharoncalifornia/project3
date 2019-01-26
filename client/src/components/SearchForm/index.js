import React from "react";
import "./style.css";
import FormBtn from "../../components/FormBtn";
import Checkbox from "../../components/Checkbox";

const OPTIONS = ["Restaurants", "Hotels", "Recreations", "Bars", "Meetups", "Others"];

class SearchForm extends React.Component {

    state = {
        checkboxes: OPTIONS.reduce(
            (options, option) => ({
                ...options,
                [option]: false
            }),
            {}
        ),
        city_zip: "",
        prefs: "",
    }

    createCheckbox = option => (
        <Checkbox
            label={option}
            isSelected={this.state.checkboxes[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
        />
    );

    createCheckboxes = () => OPTIONS.map(this.createCheckbox);

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("handle form submit event: ");
        Object.keys(this.state.checkboxes)
            .filter(checkbox => this.state.checkboxes[checkbox])
            .forEach(checkbox => {
                console.log(checkbox, "is selected.");
            });
        console.log(this.state.prefs);
        console.log(this.state.city_zip);
        // calling api here

    };

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }));
    };

    render() {
        return (
            <div className="container-fluid col-md-6 mt-5">
                <form className="dest-form">
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <input className="form-control" name="city_zip" placeholder="City, Zip"
                                value={this.state.city_zip}
                                onChange={this.handleInputChange} required />
                        </div>
                        <label for="destination" className="col-sm-6 col-form-label">Destination</label>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-6">
                            <input className="form-control" name="prefs" placeholder="General preferences"
                                value={this.state.prefs}
                                onChange={this.handleInputChange} required />
                        </div>
                        <label for="nearby" class="col-sm-6 col-form-label">Beach,&nbsp;Mountain,&nbsp;By the airport</label>
                    </div>

                    <div className="col-md-12">
                        <h4 className="col-md-4 col-md-offset-4"><label for="selections">Find:</label></h4>
                        {this.createCheckboxes()}
                    </div>

                    <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>

                </form >
            </div >
        );
    }
}

export default SearchForm;