import React from "react";
import "./style.css";
import FormBtn from "../../components/FormBtn";
import Checkbox from "../../components/Checkbox";
import API from "../../utils/API";

const OPTIONS = ["Restaurants", "Hotels", "Recreation", "Bars", "Meetups", "Other"];

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
        if(this.state.city_zip){
            // const params = {
            //     location: this.state.city_zip,
                //  sort_by: "distance",
                //  radius: 8000,
            //     term: ""
            // };

            //each checkmark searches for different status
            if (this.state.categories.Hotels) {
                // params.term = "Hotel";
                const paramsHotel = {
                    location: this.state.city_zip,
                    sort_by: "distance",
                    radius: 8000,
                    term: "Hotel"
                };
                API.yelpSearch(paramsHotel)
                .then(res => {
                    // console.log(res);
                    return this.setState({ resultHotel: res.data })
                })
                .catch(err => console.log(err));
        
            }  
            if (this.state.categories.Bars){
                // params.term = "Bars";
                const paramsBar = {
                    location: this.state.city_zip,
                    sort_by: "distance",
                    radius: 8000,
                    term: "Bars"
                };
                API.yelpSearch(paramsBar)
                .then(res => {
                    // console.log(res);
                    return this.setState({ resultBar: res.data })
                })
                .catch(err => console.log(err));
            }  
            if (this.state.categories.Meetups){
                // params.term = "Meetups";
                const paramsMeet = {
                    location: this.state.city_zip,
                    sort_by: "distance",
                    radius: 8000,
                    term: "Meetups"
                };
                API.yelpSearch(paramsMeet)
                .then(res => {
                    // console.log(res);
                    return this.setState({ resultMeetup: res.data })
                })
                .catch(err => console.log(err));
            }  
            if (this.state.categories.Recreation){
                // params.term = "Recreation";
                const paramsRec = {
                    location: this.state.city_zip,
                    sort_by: "distance",
                    radius: 8000,
                    term: "Recreation"
                };
                API.yelpSearch(paramsRec)
                .then(res => {
                    // console.log(res);
                    return this.setState({ resultRecreation: res.data })
                })
                .catch(err => console.log(err));
            }  
            if (this.state.categories.Restaurants){
                // params.term = "Restaurants";
                const paramsRest = {
                    location: this.state.city_zip,
                    sort_by: "distance",
                    radius: 8000,
                    term: "Restaurants"
                };
                API.yelpSearch(paramsRest)
                .then(res => {
                    // console.log(res);
                    return this.setState({ resultRestaurant: res.data })
                })
                .catch(err => console.log(err));
            }

            
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