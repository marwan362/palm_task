const express = require("express");
const router = express.Router();
const wellnessController = require("../controllers/wellnessController");

router.post("/", wellnessController.createSuggestion);
router.get("/", wellnessController.getSuggestions);

module.exports = router;
