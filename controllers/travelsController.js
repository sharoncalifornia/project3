const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.LocationInfo
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.LocationInfo
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    console.log("inside***  travel controller  ", req.body);
    db.LocationInfo
      .create(req.body)
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.LocationInfo
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    console.log("delete params", req.params)
    db.LocationInfo
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getPreference: function (req, res) {
    console.log("get preference");
    db.LocationInfo.find({})
      .then(response => {
        console.log("88888: ", response);
        res.json(response);
      })
      .catch(function (err) {
        res.json(err);
      });
  }
}
