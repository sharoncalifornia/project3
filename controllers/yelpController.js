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
        const {query} = req;
        // console.log(query);
        const requestParams = {
            params: query,
            headers: { Authorization: `Bearer ${YelpKey}` }
        };
        // console.log("requestParams:");
        // console.log(requestParams);
        return axios.get("https://api.yelp.com/v3/businesses/search", {...requestParams})
            .then(({data}) => {
                // console.log(data, "data")
                return res.status(200).json(data)
            })
            .catch(err => res.status(422).json(err));

        /* try async the function and pass in paramaters and generate the query here, concat the results */
    },
    getYelpBusinessConsolidated: async function(req,res){
        const termList = req.query.term;
        // console.log("termList: " + termList);
        // console.log("termsList length " + termList.length);
        var resultArray = [];
        for(var i = 0; i < termList.length; i++){
            //loop through term list
            let query = {
                ...req.query
            };
            query.term = termList[i];
            let requestParams = {
                params: query,
                headers: { Authorization: `Bearer ${YelpKey}` }
            };
            // console.log("query " + i + " " + JSON.stringify(requestParams));
            resultArray.push( axios.get("https://api.yelp.com/v3/businesses/search", {...requestParams}) )
        }
        // console.log("resultArray:" + resultArray);

        //result array has all of our promises
        Promise.all(resultArray)
        .then(result => {
            const retArray = [];
            for (var i = 0; i < result.length; i++){
                // console.log("adding " + i + " result");
                retArray.push(result[i].data);
            }
            // console.log("retArray: " + retArray);
            // console.log("returning result of consolidated search");
            res.status(200).json(retArray);
        })
        .catch(err => {
            res.status(422).json(err)
        })
    }
}