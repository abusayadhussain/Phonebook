const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact.controller");

//contact router
router.route("/contacts").get(contactController.index);
router.route("/contacts").post(contactController.new);
router.route("/contactsbymobile").get(contactController.indexByMobile);
router
  .route("/contact/:contact_id")
  .put(contactController.update)
  .delete(contactController.delete);

module.exports = router;
