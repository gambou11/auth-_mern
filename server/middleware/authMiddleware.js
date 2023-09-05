const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;
    console.log(token);
    if (!token) {
      return res.status(401).json({ msg: "Not authorized" });
    } else {
      const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(verifyToken);
      req.personId = verifyToken.id;
      next();
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

module.exports = authMiddleware;





