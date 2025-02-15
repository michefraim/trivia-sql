const { Router } = require("express");

// Require all routes
const fetchQuestion = require("./fetch-question");
const rate = require("./rate");
const leaderboards = require("./leaderboards");
const getAvatars = require("./get-avatars");
const updatePlayerScore = require("./update-player-score");
const updatePlayerAvatar = require("./update-player-avatar");

const router = Router();

// Use every required route

router.use("/fetch-question", fetchQuestion);
router.use("/rate", rate);
router.use("/leaderboards", leaderboards);
router.use("/get-avatars", getAvatars);
router.use("/update-player-score", updatePlayerScore);
router.use("/update-player-avatar", updatePlayerAvatar);

module.exports = router;
