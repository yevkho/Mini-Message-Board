const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getHome = (req, res) => {
  res.render("index.ejs", { messages });
};

const getMessageById = (req, res) => {
  const { messageId } = req.params;
  res.render("message.ejs", { message: messages[messageId] });
};

module.exports = { getHome, getMessageById, messages };
