const express = require("express");
require("dotenv").config();
const path = require("path");
const messagesRouter = require("./routes/messagesRouter");

// set up express app
const app = express();

// middleware
// configure EJS
app.set("view engine", "ejs");

// set up static assets serving
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// ignore browser auto favicon request
app.get("/favicon.ico", (req, res) => res.status(204).end());

// parse form data into req.body
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/", messagesRouter);

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

// connect server to localhost:port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}!`)
);
