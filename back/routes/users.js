const express = require("express");
const { getRandomUsers } = require("../controller/usersController");

const router = express.Router();

router.get("/", getRandomUsers);

module.exports = router;
