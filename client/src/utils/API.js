import axios from "axios";
// import yelp from "yelp-fusion";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/travels");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/travels/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/travels/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/travels", bookData);
  },

  yelpSearch: function(params) {
    // var term = params.term;
    // var location = params.city_zip;
    return axios.get("/api/yelp/Search", {params})
      .then(results => results);
  }

};
