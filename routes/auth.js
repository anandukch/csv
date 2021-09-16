module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token === process.env.TOKEN) next();
    else {
      res.status(401).json({ messgae: "Token not valid" });
    }
  } catch (error) {
    res.status(401).json({ messgae: "Token not found" });
  }
};
