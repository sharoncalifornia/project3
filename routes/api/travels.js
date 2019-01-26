const router = require("express").Router();
const travelsController = require("../../controllers/travelsController");
<<<<<<< HEAD

// Matches with "/api/travels"
router.route("/")
  .get(travelsController.findAll)
  .post(travelsController.create);

// Matches with "/api/travels/:id"
router
  .route("/:id")
  .get(travelsController.findById)
  .put(travelsController.update)
  .delete(travelsController.remove);
=======

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
>>>>>>> 425b0b0f662201c824d3d8954f10ec56fdc3fa27

module.exports = router;
