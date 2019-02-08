import React from "react";
import "./style.css";
import FormBtn from "../../components/FormBtn";
import Checkbox from "../../components/Checkbox";
import API from "../../utils/API";
import { withRouter } from 'react-router-dom'

const OPTIONS = ["Restaurants", "Hotels", "Recreation", "Bars", "Meetups"];

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
        email: ""
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

    formatResultData = data => {
        let resData = [];
        data.businesses.forEach(function (item, i) {
            let rec = {};
            rec.name = item.name;
            rec.phone = item.display_phone;
            rec.rating = item.rating;
            rec.price = item.price;
            rec.image_url = item.image_url;
            rec.address = {};
            rec.address.street = item.location.display_address[0];
            rec.address.city = item.location.city;
            rec.address.state = item.location.state;
            rec.address.zipcode = item.location.zip_code;
            resData.push(rec);
        }
        );
        return resData;
    };

    formatResultDataArray = dataArray => {
        let resData = [];
        for (var i = 0; i < dataArray.length; i++) {
            //loop through data array
            dataArray[i].businesses.forEach(function (item, i) {
                let rec = {};
                rec.name = item.name;
                rec.phone = item.display_phone;
                rec.rating = item.rating;
                rec.price = item.price;
                rec.image_url = item.image_url;
                rec.address = {};
                rec.address.street = item.location.display_address[0];
                rec.address.city = item.location.city;
                rec.address.state = item.location.state;
                rec.address.zipcode = item.location.zip_code;
                resData.push(rec);
            }
            );
        }

        console.log("result number: " + resData.length)
        return resData;
    };

    // formatResultData = data => {
    //     console.log("here"+data);
    //     let resData = [];
    //     for (let i =0; i<5; i++) {
    //         let rec = {};
    //         let bus = data.businesses[i];
    //         rec.name = bus.name;
    //         rec.phone = bus.display_phone;
    //         rec.rating = bus.rating;
    //         rec.price = bus.price;
    //         rec.image_url = bus.image_url;
    //         console.log(bus.image_url);
    //         rec.address = {};
    //         rec.address.street = bus.location.display_address[0];
    //         rec.address.city = bus.location.city;
    //         rec.address.state = bus.location.state;
    //         rec.address.zipcode = bus.location.zip_code;
    //         resData.push(rec);
    //     }
    //     return resData;
    // }

    componentDidMount() {
        // TODO: get data from database
        console.log("componentDidMount");
        let email = "";
        if (this.props.history.location.state) {
            email = this.props.history.location.state.email;
            console.log("email: " + email);
            this.setState({
                email: email,
            });
        }
    }

    handleShowListing = event => {
        const history = this.props.history;
        event.preventDefault();
        history.push({
            pathname: "/listing",
            state: { 
                email: this.state.email
            }
        });
    }

    handleFormSubmit = event => {
        const history = this.props.history;

        event.preventDefault();
        //validateForm();

        console.log(JSON.stringify(this.state));
        // call api, still need to validate the text fields to make sure they are not empty
        if (this.state.city_zip) {
            const params = {
                location: this.state.city_zip,
                sort_by: "distance",
                radius: 8000,
                limit: 5,
                term: []
            };

            //each checkmark searches for different status
            if (this.state.categories.Hotels) {
                // const paramsHotel = {
                //     location: this.state.city_zip,
                //     sort_by: "distance",
                //     radius: 8000,
                //     limit: 5,
                //     term: "Hotel"
                // };
                params.term.push("Hotel");
                // API.yelpSearch(paramsHotel)
                //     .then(res => {
                //         // console.log(res);
                //         let restData = this.formatResultData(res.data);
                //         history.push({
                //             pathname: "/result",
                //             state: { details: restData }
                //         });
                //     })
                //     .catch(err => console.log(err));

            }
            if (this.state.categories.Bars) {
                // const paramsBar = {
                //     location: this.state.city_zip,
                //     sort_by: "distance",
                //     radius: 8000,
                //     limit: 5,
                //     term: "Bars"
                // };
                params.term.push("Bars");
                // API.yelpSearch(paramsBar)
                //     .then(res => {
                //         // console.log(res);
                //         let restData = this.formatResultData(res.data);
                //         history.push({
                //             pathname: "/result",
                //             state: { details: restData }
                //         });
                //     })
                //     .catch(err => console.log(err));
            }
            if (this.state.categories.Meetups) {
                // params.term = "Meetups";
                // const paramsMeet = {
                //     location: this.state.city_zip,
                //     sort_by: "distance",
                //     radius: 8000,
                //     limit: 5,
                //     term: "Meetups"
                // };
                params.term.push("Meetups");
                // API.yelpSearch(paramsMeet)
                //     .then(res => {
                //         // console.log(res);
                //         let restData = this.formatResultData(res.data);
                //         history.push({
                //             pathname: "/result",
                //             state: { details: restData }
                //         });
                //     })
                //     .catch(err => console.log(err));
            }
            if (this.state.categories.Recreation) {
                // params.term = "Recreation";
                // const paramsRec = {
                //     location: this.state.city_zip,
                //     sort_by: "distance",
                //     radius: 8000,
                //     limit: 5,
                //     term: "Recreation"
                // };
                params.term.push("Recreation");
                // API.yelpSearch(paramsRec)
                //     .then(res => {
                //         // console.log(res);
                //         let restData = this.formatResultData(res.data);
                //         history.push({
                //             pathname: "/result",
                //             state: { details: restData }
                //         });
                //     })
                //     .catch(err => console.log(err));
            }
            if (this.state.categories.Restaurants) {
                // params.term = "Restaurants";
                // const paramsRest = {
                //     location: this.state.city_zip,
                //     sort_by: "distance",
                //     radius: 8000,
                //     limit: 5,
                //     term: "Restaurants"
                // };
                params.term.push("Restaurants");
                // API.yelpSearch(paramsRest)
                //     .then(res => {
                //         // console.log(res);
                //         let restData = this.formatResultData(res.data);
                //         history.push({
                //             pathname: "/result",
                //             state: { details: restData }
                //         });
                //     })
                //     .catch(err => console.log(err));
            }
            // console.log("Beginning Consolidated terms");
            // console.log("term length" + params.term.length);
            if (params.term.length > 0) {
                // console.log("params: " + JSON.stringify(params));
                API.yelpSearchConsolidated(params)
                    .then(res => {
                        // console.log("Consolidated return, setting state");
                        // console.log("Setting STate: " + JSON.stringify(res.data));
                        // return this.setState({result: res.data})
                        // console.log(res);
                        let restData = this.formatResultDataArray(res.data);
                        history.push({
                            pathname: "/result",
                            state: { 
                                details: restData,
                                email: this.state.email
                            }
                        });
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
        // let email = "";
        // if (this.props.history.location.state) {
        //     email = this.props.history.location.state.email;
        //     console.log("email: " + email);
        //     this.setState({
        //         email: email,
        //     });
        // }

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
                            <FormBtn onClick={this.handleShowListing}>List my saved searches</FormBtn>
                            <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
                        </div>
                    </div>
                    
                </form >
            </div >
        );
    }
}

export default withRouter(SearchForm);