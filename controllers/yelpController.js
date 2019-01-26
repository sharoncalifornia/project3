const axios = require("axios");

const YelpKey = process.env.YELP_KEY;
module.exports = {
//Yelp functions
  getYelpBusiness: function(req, res) {
    return axios.get("https://api.yelp.com/v3/businesses/search?term=" + req.body.term + "&location=" + location, { headers: { Authorization: `Bearer ${YelpKey}` } });
  }
}