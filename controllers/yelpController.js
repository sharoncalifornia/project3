const axios = require("axios");
// import axios from "axios";
// const yelp = require('yelp-fusion');

const YelpKey = process.env.YELP_KEY;
// const client = yelp.client(YelpKey);


module.exports = {
    //Yelp functions
    getYelpBusiness: function (req, res) {
        //   console.log("https://api.yelp.com/v3/businesses/search?term=" + req.params.term + "&location=" + req.params.location);
        // req.query would be term=" + req.params.term + "&location=" + req.params.location
        const query = {
            location: req.query.city_zip,
            term: req.query.term
        };
console.log(query);
        const requestParams = {
            params:query,
            headers: { Authorization: `Bearer ${YelpKey}` }
        };
        console.log("requestParams:");
console.log(requestParams);
        return axios.get("https://api.yelp.com/v3/businesses/search", {...requestParams})
            .then(({data}) => {
                console.log(data, "data")
                return res.status(200).json(data)
            })
            .catch(err => res.status(422).json(err));
        // client.search({ term: "take out food", location: req.query.zip, field: "radius", instance: "5 miles" }).then(response => {
        //     res.json(response.jsonBody.businesses)
        // }).catch(e => {
        //     console.log(e);
        // });
    }
}