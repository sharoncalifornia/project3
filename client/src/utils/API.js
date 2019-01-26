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
    /**
     * takes new properties
     * city_zip and nearby
     */
    searchCity: (params) => {
        console.log(params)
        return axios.get("/api/citysearch", { params })
            .then(results => results)
    }
}
