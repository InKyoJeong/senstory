const express = require("express");
const { getRandomUsers } = require("../controller/usersController");

const usersRouter = express.Router();

usersRouter.get("/", getRandomUsers);

module.exports = usersRouter;
