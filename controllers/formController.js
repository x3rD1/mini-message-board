const db = require("../db/queries");

async function formController(req, res) {
  const { username, message } = req.body;
  await db.createNewMessage(username, message);
  res.redirect("/");
}

module.exports = formController;
