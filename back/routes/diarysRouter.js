const express = require("express");
const { isLoggedIn } = require("./middlewares");
const { getDiarys } = require("../controller/diarysController");

const diarysRouter = express.Router();

diarysRouter.get("/:userId", isLoggedIn, getDiarys);

module.exports = diarysRouter;
