const express = require("express");

const { body } = require("express-validator");
const { validate } = require("../middleware/validation");
const placeController = require("../controllers/placeController");

const router = express.Router();

router.get("/", placeController.getAll);
router.get("/:id", placeController.getById);
router.post("/", placeController.add);
router.post("/many", placeController.postmany);
router.delete("/:id", placeController.delete);

module.exports = router;

