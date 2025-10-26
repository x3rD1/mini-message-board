const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
];

function indexController(req, res, next) {
  try {
    res.render("index", {
      title: "Mini message board",
      css: "index.css",
      text: "This is Index page",
      messages,
    });
  } catch (error) {
    next(error);
  }
}

function newController(req, res) {
  // Get the value of authorName input and messageText input
  const { authorName, messageText } = req.body;
  // Push/Add it to messages
  messages.push({ text: messageText, user: authorName, added: new Date() });
  res.render("form", { css: "form.css" });
}

module.exports = { indexController, newController };
