const express = require("express");
const router = express.Router();
const digitalController = require("../controllers/digital");
const validate = require("../utils/digital-validation"); 
const util = require("../utils");

router.get("/", util.handleErrors(digitalController.getDigitals));

router.get("/:_id", util.handleErrors(digitalController.getDigitalById));

router.post(
  "/",
  util.isAuthenticated,
  validate.digitalRules(),
  validate.checkDigitalData,
  util.handleErrors(digitalController.addDigital),
);

router.put(
  "/:_id",
  util.isAuthenticated,
  validate.digitalRules(),
  validate.checkDigitalData,
  util.handleErrors(digitalController.editDigitalById)
);

router.delete(
  "/:_id",
  util.isAuthenticated,
  util.handleErrors(digitalController.deleteDigitalById)
);

module.exports = router;
