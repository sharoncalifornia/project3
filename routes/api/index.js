const router = require("express").Router();
const travelRoutes = require("./travels");
const yelpRoutes = require("./yelp")

// travel routes
router.use("/travels", travelRoutes);
router.use("/yelp", yelpRoutes);

// Add new routes here

module.exports = router;
