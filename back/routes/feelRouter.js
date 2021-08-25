const express = require("express");
const { getFeelDiarys } = require("../controller/feelController");
const { errorHandler } = require("./middlewares");

const feelRouter = express.Router();

feelRouter.get("/:userId/:feel", getFeelDiarys, errorHandler);

module.exports = feelRouter;
