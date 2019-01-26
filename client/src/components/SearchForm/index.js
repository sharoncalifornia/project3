import React from "react";
import "./style.css";
import FormBtn from "../../components/FormBtn";
import Checkbox from "../../components/Checkbox";
import Api from "../../utils/API"

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
        const citySearchParams={
            city_zip: this.state.city_zip,
            nearby: this.state.nearby
        }
        return Api.searchCity(citySearchParams)
            .then(cityResults=>{
                return this.setState({results:cityResults})
            })
            .catch(err=>console.log(err.response.data))

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
            <div className="container-fluid col-md-6 mt-5">
                <form className="dest-form">
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <input className="form-control" name="city_zip" placeholder="City or Zipcode"
                                value={this.state.city_zip}
                                onChange={this.handleInputChange} required />
                        </div>
                        <label for="destination" className="col-sm-6 col-form-label">Destination</label>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-6">
                            <input className="form-control" name="nearby" placeholder="General preferences"
                                value={this.state.nearby}
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