const express = require("express");
const router = express.Router();
const magazineController = require("../controllers/magazine");
const validate = require("../utils/magazine-validation"); 
const util = require("../utils");

// Search filter route
router.get(
  "/search",
  util.isAuthenticated,
  util.handleErrors(magazineController.searchMagazinesByTitle)
);

router.get("/", util.handleErrors(magazineController.getMagazines));

router.get("/:_id", util.handleErrors(magazineController.getMagazineById));

router.post(
  "/",
  util.isAuthenticated,
  validate.magazineRules(),
  validate.checkMagazineData,
  util.handleErrors(magazineController.addMagazine),
);

router.put(
  "/:_id",
  util.isAuthenticated,
  validate.magazineRules(),
  validate.checkMagazineData,
  util.handleErrors(magazineController.editMagazineById)
);

router.delete(
  "/:_id",
  util.isAuthenticated,
  util.handleErrors(magazineController.deleteMagazineById)
);

module.exports = router;
