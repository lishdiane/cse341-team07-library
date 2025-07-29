const { body, validationResult } = require("express-validator");
const validate = {};

// validation rules for magazine
validate.magazineRules = () => {
  return [
    body("title")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Please enter a valid title."),

    body("issueNumber")
      .trim()
      .escape()
      .notEmpty()
      .isNumeric()
      .withMessage("Issue number must be a numerical value."),

    body("publisher")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Please enter a valid publisher."),

    body("topic")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Please enter a valid topic."),

    body("publicationDate")
      .trim()
      .notEmpty()
      .isISO8601()
      .withMessage("Publication date must be a valid date (ISO8601)."),
  ];
};

validate.checkMagazineData = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};

module.exports = validate;
