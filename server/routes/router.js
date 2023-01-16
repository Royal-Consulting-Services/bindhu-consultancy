const express = require("express");
const userController = require("../controller/nodeCRUDcontroller");
const router = express.Router();
const verifyToken = require("../verifyToken.js");

router.post("/createUser", userController.createUser);
router.post("/login", userController.getLoginDetails);
router.get("/userByUserName/:userName", userController.getUserByUserName);
router.get("/getAllUsers", verifyToken, userController.userDetails);
router.put("/updateUser", verifyToken, userController.updateUserByUserName);
router.delete(
  "/delete/:userName",
  verifyToken,
  userController.deleteSelectedUser
);

module.exports = router;
