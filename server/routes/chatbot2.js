const express = require("express");
const router = express.Router();
const { chatlog } = require("../models");

router.post("/", async (req, res) => {
  const post = req.body;
  await chatlog.create(post);
  res.json(post);
});

module.exports = router;