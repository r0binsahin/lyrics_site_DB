const express = require("express");
const authenticate = require("../midlleware/authentication");

const router = express.Router();

const { CreateLyric } = require("../controllers/CreateLyrics");
const { UpdateLyric } = require("../controllers/UpdateLyric");
const { DeleteLyric } = require("../controllers/DeleteLyric");
const { GetLyrics } = require("../controllers/GetLyrics");
const { GetLyricById } = require("../controllers/GetLyricsByID");

router.post("/", CreateLyric);
router.put("/:lyricId", UpdateLyric);
router.get("/", GetLyrics);
router.get("/:lyricId", GetLyricById);
router.delete("/:lyricId", DeleteLyric);

module.exports = router;
