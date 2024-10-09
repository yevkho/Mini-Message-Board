const messages = [
  {
    text: "Hi there!",
    user: "Amado",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getMessages = (req, res) => {
  res.render("index.ejs", { messages });
};

const getNew = (req, res) => {
  res.render("form.ejs");
};

const createNew = (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });

  res.redirect("/");
};

const getMessageById = (req, res) => {
  const { messageId } = req.params;
  res.render("message.ejs", { message: messages[messageId] });
};

module.exports = { getMessages, getNew, createNew, getMessageById };
