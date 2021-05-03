const jwt = require("jsonwebtoken");
const { SECRET } = require("config").jwt;

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
 
  if (!authHeader) {
    res.status(401).json({ message: "Token undefined" });
    return;
  }
  const [accessToken, refreshToken] = JSON.parse(authHeader.replace("Bearer ", ""));

  try {

    let payload = jwt.verify(accessToken, SECRET);
    if (payload.type !== "access") {
      res.status(400).json({ message: "Access is not available" });
    }
    
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "accessToken expired" });
    }
  }
  next();
};
