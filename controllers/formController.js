const db = require("../db/queries");
const { validationResult, matchedData } = require("express-validator");

async function formController(req, res) {
  const { username, message } = matchedData(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("form", {
      title: "Form",
      css: "form.css",
      errors: errors.mapped(),
      old: req.body,
    });
  }
  await db.createNewMessage(username, message);
  res.redirect("/");
}

module.exports = formController;
