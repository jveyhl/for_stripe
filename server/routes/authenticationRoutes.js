const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authenticationControllers');

// routes for logging in and signing up
router.post("/signup", signup);
router.post("/login",login);

module.exports = router;
