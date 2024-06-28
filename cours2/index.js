require('./server');

// const express = require("express");
// const app = express();
// const router = express.Router();

// // Entry point (bootstrap)
// const http = require("http");

// http
//   .createServer(app)
//   .listen(3000, () => console.log("Server at http://localhost:3000"));

// // App configuration
// app.use(router);

// // Routing
// router.get("", homeCtrl);
// router.get("/contact", contactCtrl);

// // Controllers
// function homeCtrl(req, res) {
//   res.send(
//     '<div><a href="/contact">Page de contact</a></div><h1>Bienvenue</h1>'
//   );
// }

// function contactCtrl(req, res) {
//   res.send('<div><a href="/">Page d\'accueil</a></div><h1>Page contact</h1>');
// }