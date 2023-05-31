const jwt = require("jsonwebtoken");
const { secret } = require("./models/config");

function generateAccessToken(username) {
  return jwt.sign(username, secret, { expiresIn: "1800s" });
}

const verifyToken = (req, res, next) => {
  const token = generateAccessToken({ userName: req.body.userName });
  if (!token) {
    res.status(403).json({
      message: "token required for authentication",
    });
  } else {
    try {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];
      const decodedToken = jwt.verify(token, secret);

      req.decodedToken = decodedToken;
    } catch (error) {
      res.status(401).json({
        message: "Invalid token received",
      });
    }
  }
  return next();
};

module.exports = verifyToken;
