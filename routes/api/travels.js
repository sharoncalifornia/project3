const router = require("express").Router();
const travelsController = require("../../controllers/travelsController");

router.route("/")
  .get(travelsController.findAll);

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
