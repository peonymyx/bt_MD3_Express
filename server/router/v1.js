var express = require('express');

var router = express.Router();

var usersApi = require("./api/users.api.js")
router.use("/users", usersApi)


module.exports = router;