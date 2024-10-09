const { Router } = require("express");
const newController = require("../controllers/newController");

const newRouter = Router();

newRouter.get("/", newController.getNew);

newRouter.post("/", newController.createNew);

module.exports = newRouter;
