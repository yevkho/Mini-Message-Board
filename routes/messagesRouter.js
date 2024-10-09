const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const messagesRouter = Router();

messagesRouter.get("/", messagesController.getMessages);

messagesRouter.get("/new", messagesController.getNew);

messagesRouter.post("/new", messagesController.createNew);

messagesRouter.get("/:messageId", messagesController.getMessageById);

module.exports = messagesRouter;
