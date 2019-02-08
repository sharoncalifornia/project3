const db = require("../models");

module.exports = {

  // working
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

  // working
  getPreferences: function (req, res) {
    db.Member.findOne({ email: req.body.email })
      .populate("LocationsInfo") 
      .then(response => {
        res.json(response);
      })
      .catch(function (err) {
        res.json(err);
      });
  },


  // how to delete/update Location info???

};