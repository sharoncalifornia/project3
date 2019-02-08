const db = require("../models");

module.exports = {

  create: function (req, res) {
    db.LocationInfo.create(req.body.LocationInfo)
      .then(function (dbLocatioInfo) {
        const condtions = { email: req.body.email }
        return db.Member.findOneAndUpdate(condtions,
          { $push: { prefs: dbLocatioInfo._id } }, { new: true });
      })
      .then(function (memberpref) {
        res.json(memberpref);
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  update: function (req, res) {
    console.log("update member preference: " + req.body);
    db.MemberPreference
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAll: function (req, res) {
    db.MemberPreference
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // findAll: function(req, res) {
  //   db.MemberPreference
  //     .find(req.query)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.MemberPreference
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.MemberPreference
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.MemberPreference
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.MemberPreference
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};