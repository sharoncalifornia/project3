const router = require("express").Router();
const yelpController = require("../../controllers/yelpController");

// Matches with "/api/yelp"
router.route("/Search")
  .get(yelpController.getYelpBusiness);

router.route("/SearchConsolidated")
  .get(yelpController.getYelpBusinessConsolidated);

module.exports = router;
