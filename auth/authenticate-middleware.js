const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(401).json({ you: "shall not pass!" });
  }
}; 