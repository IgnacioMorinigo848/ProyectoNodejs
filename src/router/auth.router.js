// auth.router.js
const express = require('express');
const router = express.Router();
const { signinHandler, signupHandler } = require("../controller/auth.controller.js");


// middleware y rutas

router.post("/signup", signupHandler);
router.post("/signin", signinHandler);

module.exports = router;

