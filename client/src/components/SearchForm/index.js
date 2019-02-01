import React from "react";
import "./style.css";
import FormBtn from "../../components/FormBtn";
import Checkbox from "../../components/Checkbox";
import API from "../../utils/API";
import { withRouter } from 'react-router-dom'

const OPTIONS = ["Restaurants", "Hotels", "Recreations", "Bars", "Meetups"];

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

    formatResultData = data => {
        console.log("here"+data);
        let resData = [];
        for (let i =0; i<5; i++) {
            let rec = {};
            let bus = data.businesses[i];
            rec.name = bus.name;
            rec.phone = bus.display_phone;
            rec.rating = bus.rating;
            rec.price = bus.price;
            rec.image_url = bus.image_url;
            rec.address = {};
            rec.address.street = bus.location.display_address[0];
            rec.address.city = bus.location.city;
            rec.address.state = bus.location.state;
            rec.address.zipcode = bus.location.zip_code;
            resData.push(rec);
        }
        return resData;
    }

    handleFormSubmit = event => {
        const history = this.props.history;

        event.preventDefault();
        //validateForm();

        console.log(JSON.stringify(this.state));
        // call api, still need to validate the text fields to make sure they are not empty
        if(this.state.city_zip){

            //each checkmark searches for different status
            if (this.state.categories.Hotels) {
                // params.term = "Hotel";
                const paramsHotel = {
                    location: this.state.city_zip,
                    term: "Hotel"
                };
                API.yelpSearch(paramsHotel)
                .then(res => {
                    console.log(res);
                    let restData = this.formatResultData(res.data);

                    // restData.name = res.data.businesses[0].name;
                    history.push({
                        pathname: "/result",
                         state: {details: restData}
                    });
                   // return this.setState({ resultHotel: res.data })
                })
                .catch(err => console.log(err));
        
            }  
            if (this.state.categories.Bars){
                // params.term = "Bars";
                const paramsBar = {
                    location: this.state.city_zip,
                    term: "Bars"
                };
                API.yelpSearch(paramsBar)
                .then(res => {
                    console.log(res);
                    // navigate
                    let restData = {};
                    restData.name = res.data.businesses[0].name;
                    
                    console.log(restData.name);
                    history.push({
                        pathname: "/result",
                         state: {detail: restData.name}
                    });
                   // return this.setState({ result: res.data })
                })
                .catch(err => console.log(err));
            }  
            if (this.state.categories.Meetups){
                // params.term = "Meetups";
                const paramsMeet = {
                    location: this.state.city_zip,
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

    //    componentDidMount() {
    //        console.log("componentDidMount");
    //     this._asyncRequest = asyncLoadData().then(
    //         externalData => {
    //             this._asyncRequest = null;
    //             this.setState({ externalData });
    //         }
    //     );
    // }

    // componentWillUnmount() {
    //     console.log("componentWillUnmount");
    //     if (this._asyncRequest) {
    //         this._asyncRequest.cancel();
    //     }
    // }

    render() {
       // console.log(this.props.location.state.detail);
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

export default withRouter(SearchForm);