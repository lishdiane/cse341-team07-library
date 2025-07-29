const { body, validationResult } = require("express-validator");
const validate = {};

// validation rules for digital collection
validate.digitalRules = () => {
  return [
    body("type")
      .trim()
      .escape()
      .notEmpty()
      .isIn(["eBook", "audiobook", "video"])
      .withMessage("Type must be one of: eBook, audiobook, video."),

    body("title")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Please enter a valid title."),

    body("author")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Please enter a valid author."),

    body("format")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Please enter a valid format."),

    body("fileURL")
      .trim()
      .notEmpty()
      .isURL()
      .withMessage("File URL must be a valid URL."),
  ];
};

validate.checkDigitalData = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};

module.exports = validate;
