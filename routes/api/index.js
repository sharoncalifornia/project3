const router = require("express").Router();
const travelRoutes = require("./travels");
const yelpRoutes = require("./yelp")

// travel routes
router.use("/travels", travelRoutes);
router.use("/yelp", travelRoutes);

module.exports = router;
