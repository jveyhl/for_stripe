const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/userControllers");
const { verifyAccessToken } = require("../middlewares.js");

// Routes beginning with /api/profile
router.get("/",verifyAccessToken, getUser);

module.exports = router;