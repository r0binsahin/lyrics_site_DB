const express = require("express");
const { RegisterAdmin, Login } = require("../controllers/AuthController");
const router = express.Router();

router.post("/register", RegisterAdmin);
router.post("/login", Login);

module.exports = router;
