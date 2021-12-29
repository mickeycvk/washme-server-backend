const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const { authJwt } = require("../middleware");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [verifySignUp.checkDuplicateUsername, verifySignUp.checkRolesExisted],
    controller.signup
  );

  app.put("/api/auth/:id",[verifySignUp.checkDuplicateUsername], controller.updateUser);

  app.delete("/api/auth/:id", controller.deleteUser);

  app.post("/api/auth/signin", controller.signin);

  //get userBoard1
  app.get(
    "/api/wash/userone",
    [authJwt.verifyToken, authJwt.isUser],
    controller.userBoard
  );
  //get userBoard2
  app.get(
    "/api/wash/usertwo",
    [authJwt.verifyToken, authJwt.isUser],
    controller.userBoardTwo
  );
  //get userBoard3
  app.get(
    "/api/wash/userthree",
    [authJwt.verifyToken, authJwt.isUser],
    controller.userBoardThree
  );
  //get userBoard4
  app.get(
    "/api/wash/userfour",
    [authJwt.verifyToken, authJwt.isUser],
    controller.userBoardFour
  );
  //get userBoard5
  app.get(
    "/api/wash/userfive",
    [authJwt.verifyToken, authJwt.isUser],
    controller.userBoardFive
  );
  //get userBoard6
  app.get(
    "/api/wash/usersix",
    [authJwt.verifyToken, authJwt.isUser],
    controller.userBoardSix
  );
  //get userBoard7
  app.get(
    "/api/wash/userseven",
    [authJwt.verifyToken, authJwt.isUser],
    controller.userBoardSeven
  );
  //get userBoard8
  app.get(
    "/api/wash/usereight",
    [authJwt.verifyToken, authJwt.isUser],
    controller.userBoardEight
  );
  //get userBoard9
  app.get(
    "/api/wash/usernine",
    [authJwt.verifyToken, authJwt.isUser],
    controller.userBoardNine
  );
  //get userBoard10
  app.get(
    "/api/wash/userten",
    [authJwt.verifyToken, authJwt.isUser],
    controller.userBoardTen
  );

  app.get(
    "/api/wash/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
