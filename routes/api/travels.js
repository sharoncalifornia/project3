const router = require("express").Router();
const travelsController = require("../../controllers/travelsController");
const membersPreferenceController = require("../../controllers/membersPreferenceController");
router.route("/location")
  .post(travelsController.create);

router.route("/updatelocation/:id")
  .post(travelsController.update);  

router.route("/preference")
  .post(membersPreferenceController.create);

router.route("/updatepreference/:id")
  .post(membersPreferenceController.update)  

// Matches with "/api/travels"
// router.get("/");
// router.post("/");
// router.route("/")
//   .get(travelsController.findAll)
  // .post(travelsController.create);

// Matches with "/api/travels/:id"
// router
//   .route("/:id");
  // .get(travelsController.findById)
  // .put(travelsController.update)
  // .delete(travelsController.remove);

module.exports = router;
