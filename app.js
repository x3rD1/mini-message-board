const express = require("express");
const app = express();

// For static files e.g. (styles.css)
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Set the views directory for express to find ejs files
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routers
const indexRouter = require("./routes/indexRouter");

//Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Middlewares
app.use("/", indexRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Initiating Mini message board app");
});
