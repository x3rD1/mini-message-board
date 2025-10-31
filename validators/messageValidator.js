const { body } = require("express-validator");

const validateMessage = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Name must only contain letters.")
    .isLength({ min: 3, max: 18 })
    .withMessage("Name must be between 3 and 12 characters."),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required.")
    .isLength({ max: 200 })
    .withMessage("Message cannot exceed 200 characters"),
];

module.exports = { validateMessage };
