import axios from "axios";

export default {
/*
    getTravels: function () {
        return axios.get("/api/travels");
    },

    getTravel: function (id) {
        return axios.get("/api/travels/" + id);
    },

    deleteTravel: function (id) {
        return axios.delete("/api/travels/" + id);
    },*/

    saveTravelsLocation: function (data) {
        console.log("inside API.js  sending request: ",data);
        return axios.post("/api/travels/location", data);
    },
    saveTravelsPreference: function (data) {
        return axios.post("/api/travels/Preference", data);
    },
    deleteTravelsLocation: function(id) {
        return axios.delete("/api/travels/location/"+id)
    },

    signup: function (data) {
        return axios.post("/api/user/register", data);
    },

    login: function(data) {
        return axios.post("/api/user/login", data);
    },

    /**
     * takes new properties
     * city_zip and nearby
     */
    searchCity: (params) => {
        console.log(params)
        return axios.get("/api/citysearch", { params })
            .then(results => results)
    },

    yelpSearch: function (params) {
        // var term = params.term;
        // var location = params.city_zip;
        return axios.get("/api/yelp/Search", {params})
          .then(results => results);
    },

    yelpSearchConsolidated: function(params) {
      // console.log("running consolidated search");
      return axios.get("/api/yelp/SearchConsolidated", {params})
      .then(result => {
        // console.log("API passing result: " + JSON.stringify(result));
        return result
      });
    }

};

