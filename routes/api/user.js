const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/register")
  .post(userController.registerUser);

router.route("/login")
  .get(userController.loginUser);

module.exports = router;
