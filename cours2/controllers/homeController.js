function homeCtrl(req, res) {
    res.send(
      '<div><a href="/contact">Page de contact</a></div><h1>Bienvenue</h1>'
    );
  }
  
  module.exports = homeCtrl;
  