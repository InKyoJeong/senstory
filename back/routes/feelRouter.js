const express = require("express");
const { getFeelDiarys } = require("../controller/feelController");

const feelRouter = express.Router();

feelRouter.get("/:userId/:feel", getFeelDiarys);

module.exports = feelRouter;
