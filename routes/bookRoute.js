const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book");
const validate = require("../utils/inventory-validation");
const util = require("../utils");

router.get("/", util.handleErrors(bookController.getBooks));

router.get("/:_id", util.handleErrors(bookController.getBookById));

router.post(
  "/",
  util.isAuthenticated,
  validate.bookRules(),
  validate.checkBookData,
  util.handleErrors(bookController.addBook),
);

router.put(
  "/:_id",
  util.isAuthenticated,
  validate.bookRules(),
  validate.checkBookData,
  util.handleErrors(bookController.editBookById)
);

router.delete(
  "/:_id",
  util.isAuthenticated,
  util.handleErrors(bookController.deleteBookById)
);

module.exports = router;
