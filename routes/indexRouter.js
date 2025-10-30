const express = require("express");
const indexRouter = express.Router();
const { validateMessage } = require("../validators/messageValidator");

const {
  indexController,
  newController,
  viewMessageController,
} = require("../controllers/indexController");
const formController = require("../controllers/formController");

// GET methods
indexRouter.get("/", indexController);
indexRouter.get("/message/:messageId", viewMessageController);
indexRouter.get("/new", newController);
// POST methods
indexRouter.post("/new", validateMessage, formController);
module.exports = indexRouter;
