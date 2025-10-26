const express = require("express");
const indexRouter = express.Router();

const {
  indexController,
  newController,
} = require("../controllers/indexController");

indexRouter.get("/", indexController);
indexRouter.post("/new", newController);

module.exports = indexRouter;
