const express = require("express");
const router = express.Router();

const user = require("../controller/users.controller");
router.get("/check", user.check);
router.post("/register", user.registerUser);
router.post("/login", user.loginUser);

module.exports = router;
