const { messages } = require("./indexController");

function formController(req, res) {
  const { authorName, messageText } = req.body;
  messages.push({ text: messageText, user: authorName, added: new Date() });
  res.redirect("/");
}

module.exports = formController;
