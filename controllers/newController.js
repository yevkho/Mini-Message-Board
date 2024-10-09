const indexController = require("../controllers/indexController");

const getNew = (req, res) => {
  res.render("form.ejs");
};

const createNew = (req, res) => {
  indexController.messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });

  res.redirect("/");
};

module.exports = { getNew, createNew };
