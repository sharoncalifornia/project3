const router = require("express").Router();
const travelRoutes = require("./travels");
<<<<<<< HEAD
const cityController = require("../../controllers/cityController")
// travel routes
router.use("/travels", travelRoutes)

router.get("/citysearch",cityController.search)
=======
const yelpRoutes = require("./yelp")

// travel routes
router.use("/travels", travelRoutes);
router.use("/yelp", yelpRoutes);
>>>>>>> afa2ed34e983c2b0c5dd74458b8d0bf5bcf28f84

module.exports = router;
