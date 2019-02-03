import axios from "axios";

export default {

    getTravels: function () {
        return axios.get("/api/travels");
    },

    getTravel: function (id) {
        return axios.get("/api/travels/" + id);
    },

    deleteTravel: function (id) {
        return axios.delete("/api/travels/" + id);
    },

    saveTravels: function (data) {
        return axios.post("/api/travels/", data);
    },

    signup: function (data) {
        console.log("data", data)
        console.log("this was called")
        return axios.post("/api/user/register", data)
            .then(response => response.data);
    },

    login: function(data) {
        console.log("call login with data: ", data);
        return axios.get("/api/user/login", data)
            .then(response => response.data);
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
        return axios.get("/api/yelp/Search", { params })
            .then(results => results);
    }
};

