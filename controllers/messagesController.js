const db = require("../db/queries");

// 1
const getMessages = async (req, res) => {
  const rawMessages = await db.getAllMessages();
  res.render("index.ejs", { rawMessages });
};

// 2
const getNew = (req, res) => {
  res.render("form.ejs");
};

// 3
const createNew = async (req, res) => {
  const { author, message } = req.body;
  await db.insertMessage({ author, message });
  res.redirect("/");
};

// 4
const getMessageById = async (req, res) => {
  const { messageId } = req.params;
  console.log(req.params);
  console.log(messageId);

  const selectedMessage = await db.getMessageById(messageId);
  console.log(selectedMessage);
  res.render("message.ejs", { selectedMessage });
};

module.exports = { getMessages, getNew, createNew, getMessageById };
