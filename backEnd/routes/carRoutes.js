const express = require("express");
const {createCar, getCars, getCarByID, deleteCar,} = require("../controllers/carController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getCars);
router.get("/:id", getCarByID);
router.post("/", authMiddleware, createCar);
router.delete("/:id", authMiddleware, deleteCar);

module.exports = router;
