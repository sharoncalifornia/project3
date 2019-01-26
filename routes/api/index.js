const router = require("express").Router();
const travelRoutes = require("./travels");
const cityController = require("../../controllers/cityController")
// travel routes
router.use("/travels", travelRoutes)

router.get("/citysearch",cityController.search)

module.exports = router;
