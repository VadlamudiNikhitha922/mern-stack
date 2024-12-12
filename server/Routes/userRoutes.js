const express = require("express");
const {SignupS, Logins} = require("../controllers/Signupcontroller");


const router =express.Router();
router.post("/signup",SignupS);
router.post("login",Logins)

module.exports = router;