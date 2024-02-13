const express = require("express");
const authenticate = require("../midlleware/authentication");

const router = express.Router();

const { CreateLyric } = require("../controllers/CreateLyrics");
const { UpdateLyric } = require("../controllers/UpdateLyric");
const { DeleteLyric } = require("../controllers/DeleteLyric");
const { GetLyrics } = require("../controllers/GetLyrics");
const { GetLyricById } = require("../controllers/GetLyricsByID");

router.post("/", authenticate, CreateLyric);
router.put("/:lyricId", authenticate, UpdateLyric);
router.get("/", authenticate, GetLyrics);
router.get("/:lyricId", authenticate, GetLyricById);
router.delete("/:lyricId", authenticate, DeleteLyric);

module.exports = router;
