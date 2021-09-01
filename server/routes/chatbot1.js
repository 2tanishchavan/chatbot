const express = require("express");
const router = express.Router();
const { distressed } = require("../models");

router.post("/", async (req, res) => {
  const post = req.body;
  await distressed.create(post);
  console.log(post);
  res.json(post);
});

module.exports = router;