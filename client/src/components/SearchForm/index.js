import React from "react";
import "./style.css";
import FormBtn from "../../components/FormBtn";
import Checkbox from "../../components/Checkbox";
import API from "../../utils/API";

const OPTIONS = ["Restaurants", "Hotels", "Recreations", "Bars", "Meetups", "Others"];

class SearchForm extends React.Component {

    state = {
        categories: OPTIONS.reduce(
            (options, option) => ({
                ...options,
                [option]: false
            }),
            {}
        ),
        city_zip: "",
        nearby: "",
    }

    createCheckbox = option => (
        <Checkbox
            label={option}
            isSelected={this.state.categories[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
        />
    );

    createCheckboxes = () => OPTIONS.map(this.createCheckbox);

    // updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        console.log(JSON.stringify(this.state));
        // call api, still need to validate the text fields to make sure they are not empty
        if (this.state.categories.Hotels) {
            const params = {
                city_zip: this.state.city_zip,
                term: "Hotels"
            };
            API.yelpSearch(params)
                .then(res => {
                    console.log(res);
                    return this.setState({ result: res.data })
                })
                .catch(err => console.log(err));
        }

    };

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            categories: {
                ...prevState.categories,
                [name]: !prevState.categories[name]
            }
        }));
    };

    render() {
        return (
            <div className="container-fluid col-md-3 mt-5">
                <form className="dest-form">
                    <div className="form-group row">
                        <label htmlFor="destination" className="col-form-label">Destination</label>
                        <input className="form-control" name="city_zip" placeholder="City or Zipcode"
                            value={this.state.city_zip}
                            onChange={this.handleInputChange} required />
                    </div>

                    <div className="form-group row">
                        <label htmlFor="nearby" className="col-form-label">Beach,&nbsp;Mountain,&nbsp;By the airport</label>
                        <input className="form-control" name="nearby" placeholder="General preferences"
                            value={this.state.nearby}
                            onChange={this.handleInputChange} required />
                    </div>

                    <div className="form-group row">
                        <label htmlFor="find" className="col-form-label my-0">Find:</label>
                        <div className="col-sm-12 ml-5">
                            {this.createCheckboxes()}
                            <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
                        </div>
                    </div>
                </form >
            </div >
        );
    }
}

export default SearchForm;