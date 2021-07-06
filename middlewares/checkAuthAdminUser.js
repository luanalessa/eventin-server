function checkAuthAdminUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res.status(400);
    res.send({ message: "Invalid session" });
  } else {
    //decripta o token, faz split e pega o tipo de ususario
    const type = token.split(".")[1];

    if (type === "admin" || type === "user") {
      next();
    } else {
      console.log("ERROR");
      res.status(400);
      res.send({ message: "User not authorized" });
    }
  }
}

module.exports = checkAuthAdminUser;
