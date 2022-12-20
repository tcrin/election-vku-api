module.exports = function (router) {
  var signInController = require("../controllers/sign_in_controller");
  router.get("/sign-in", signInController.getAllSignIn);
  router.get("/sign-in/:uid", signInController.getSignInById);
  router.post("/sign-in", signInController.insertSignIn);
  router.put("/sign-in", signInController.updateSignIn);
  router.delete("/sign-in/:uid", signInController.deleteSignIn);
};
