const connection = require("../models/db");
const jwt = require("jsonwebtoken");
const constants = require("../constants");
const { secretKey } = require("../models/config");
const userDetails = async (req, res) => {
  try {
    if (req && req.decodedToken && req.decodedToken.role === "admin") {
      let User = await connection.getUsers();
      if (User !== null) {
        const result = {
          statusCode: 200,
          message: constants.usersAvailable,
          users: User.filter((ele) => ele.userName !== "admin"),
        };
        res.send(result);
      } else {
        const result = {
          statusCode: 400,
          message: constants.incorrectData,
        };
        res.send(result);
      }
    } else {
      const result = {
        statusCode: 403,
        message: constants.accessDenied,
      };
      res.send(result);
    }
  } catch (error) {
    const result = {
      statusCode: 500,
      message: "Internal server error",
    };
    res.send(result);
  }
};

const getLoginDetails = async (req, res) => {
  try {
    let User = await connection.getUsers();
    const doc = User.find((user) => user.userName === req.body.userName);
    if (doc !== null && doc !== undefined) {
      const response = req.body.password === doc.password ? true : false;
      if (req.body.password === doc.password) {
        const authToken = jwt.sign(
          {
            userName: req.body.userName,
            password: req.body.password,
            role: doc.role,
          },
       secretKey,
          {
            expiresIn: "1h",
          }
        );
        const result = {
          statusCode: 200,
          message: constants.loginStatus,
          data: { authToken },
        };
        res.send(result);
      } else if (req.body.password !== doc.password) {
        const result = {
          statusCode: 400,
          message: constants.incorrectData,
        };
        res.send(result);
      } else {
        const result = {
          statusCode: 500,
          message: err,
        };
        res.send(result);
      }
    } else {
      const result = {
        statusCode: 404,
        message: constants.userNotExist,
        data: null,
      };
      res.send(result);
    }
  } catch (error) {
    const result = {
      statusCode: 500,
      message: error.message,
    };
    res.send(result);
  }
};

const createUser = async (req, res) => {
  try {
    const userschema = {
      userName: req.body.userName,
      firstname: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };
    let currentUsers = await connection.getUsers();
    const isuserExists = await currentUsers.find(
      (user) => user.userName === req.body.userName
    );
    if (isuserExists) {
      const result = {
        statusCode: 201,
        message: constants.isuserExists,
        users: userschema,
      };
      res.send(result);
    } else {
      let isUserAdded = await connection.createUser(userschema);
      if (
        isUserAdded !== null &&
        isUserAdded !== undefined &&
        isUserAdded.affectedRows === 1
      ) {
        console.log("New user data added");
        const result = {
          statusCode: 200,
          message: "user created successfully",
          users: userschema,
        };
        res.send(result);
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};

const getUserByUserName = async (req, res) => {
  try {
    let User = await connection.getUsers();
    const userData = await User.find(
      (user) => user.userName === req.params.userName
    );
    if (userData) {
      const result = {
        statusCode: 200,
        message: constants.usersAvailable,
        users: userData,
      };
      res.send(result);
    } else {
      const result = {
        statusCode: 400,
        message: constants.userNotExist,
      };
      res.send(result);
    }
  } catch (error) {
    const result = {
      statusCode: 500,
      message: error.message,
    };
    res.send(result);
  }
};

const updateUserByUserName = async (req, res) => {
  try {
    if (req && req.decodedToken && req.decodedToken.role === "admin") {
      let isUserUpdated = await connection.updateUser(req);
      if (
        isUserUpdated !== null &&
        isUserUpdated !== undefined &&
        isUserUpdated.affectedRows === 1
      ) {
        const result = {
          statusCode: 201,
          message: constants.isUserUpdated,
          users: req.body,
        };
        res.send(result);
      } else {
        const result = {
          statusCode: 400,
          message: constants.updateFailed,
        };
        res.send(result);
      }
    } else {
      const result = {
        statusCode: 403,
        message: constants.accessDenied,
      };
      res.send(result);
    }
  } catch (error) {
    console.log("error", error);
  }
};

const deleteSelectedUser = async (req, res) => {
  try {
    if (req && req.decodedToken && req.decodedToken.role === "admin") {
      let isUserDeleted = await connection.deleteUser(req);
      if (
        isUserDeleted !== null &&
        isUserDeleted !== undefined &&
        isUserDeleted.affectedRows === 1
      ) {
        const result = {
          statusCode: 200,
          message: constants.userDeleted,
        };
        res.send(result);
      } else {
        const result = {
          statusCode: 400,
          message: constants.userDeletionFailed,
        };
        res.send(result);
      }
    } else {
      const result = {
        statusCode: 403,
        message: constants.accessDenied,
      };
      res.send(result);
    }
  } catch (error) {
    const result = {
      statusCode: 500,
      message: error.message,
    };
    res.send(result);
  }
};
module.exports = {
  userDetails,
  getLoginDetails,
  createUser,
  getUserByUserName,
  updateUserByUserName,
  deleteSelectedUser,
};
