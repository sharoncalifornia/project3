const router = require("express").Router();
const travelRoutes = require("./travels");

// travel routes
router.use("/travels", travelRoutes);

module.exports = router;
