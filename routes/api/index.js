const router = require("express").Router();
const travelRoutes = require("./travels");
const yelpRoutes = require("./yelp")
const userRoutes = require("./user")

// travel routes
router.use("/travels", travelRoutes);
router.use("/yelp", yelpRoutes);
router.use("/user", userRoutes);

// Add new routes here

module.exports = router;
