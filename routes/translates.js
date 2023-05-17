const express = require("express");
const router = express.Router();
const {
    getAllTranslates,
    createTranslate,
    getSingleTranslate,
    updateTranslate,
    deleteTranslate
} = require("../controllers/translates");

router.get("/", getAllTranslates);
router.post("/", createTranslate);
router.get("/:id", getSingleTranslate);
router.patch("/:id", updateTranslate);
router.delete("/:id", deleteTranslate);

module.exports = router;