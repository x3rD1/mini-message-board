const db = require("../db/queries");

async function indexController(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "Mini message board",
    css: "index.css",
    text: "This is Index page",
    messages,
  });
}

function newController(req, res) {
  res.render("form", { title: "Form", css: "form.css" });
}

async function viewMessageController(req, res, next) {
  const { messageId } = req.params;
  const message = await db.viewMessage(messageId);
  console.log(message);
  if (!message) {
    console.log(messageId);
    return next(new Error("Message not found"));
  }

  res.render("message", {
    title: "Message",
    css: "message.css",
    message,
  });
}

module.exports = {
  indexController,
  newController,
  viewMessageController,
};
