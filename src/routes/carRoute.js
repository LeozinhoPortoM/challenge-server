const express = require("express");
const router = express.Router();

const carController = require('../controllers/CarController')

router.get("/", carController.index);
router.post("/", carController.store);
router.get("/:id", carController.show);
router.put("/:id", carController.update);
router.delete("/:id", carController.delete);

module.exports = router;
