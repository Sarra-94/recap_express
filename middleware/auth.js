const auth = (req, res, next) => {
  if (true) {
    console.log("authenticated");
    next();
  } else {
    res.send("not authenticated");
  }
};

module.exports = auth;
