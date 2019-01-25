const axios = require("axios");

const YelpKey = process.env.YELP_KEY;
module.exports = {
//Yelp functions
  getYelpBusiness: function(term, location) {
    return axios.get("https://api.yelp.com/v3/businesses/search?term=" + term + "&location=" + location, { headers: { Authorization: `Bearer ${YelpKey}` } });
  }
}