const path = require("path");
const router = require("express").Router()

//Route linked to index.html
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
//Excerise HTML
router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
//Stats HTML
router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router
  