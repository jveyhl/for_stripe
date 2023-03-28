const express = require('express');
const router = express.Router();
const { getAllPlants, getPlant, addPlant, updatePlant, deletePlant } = require("../controllers/plantControllers");
const { verifyAccessToken } = require("../middlewares.js/index.js");

// api routes
router.get("/", verifyAccessToken,getAllPlants);
router.get("/:plantId", verifyAccessToken,getPlant);
router.post("/", verifyAccessToken,addPlant);
router.put("/:plantId", verifyAccessToken,updatePlant);
router.delete("/:plantId", verifyAccessToken,deletePlant);

module.exports = router;
