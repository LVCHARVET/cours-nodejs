const express = require("express");
const router = express.Router();
const homeCtrl = require("./controllers/homeController");
const contactCtrl = require("./controllers/contactController");

// Routing
router.get("", homeCtrl);
router.get("/contact", contactCtrl);

module.exports = router;
