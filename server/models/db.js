const mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "customer",
  port: 3306,
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  } else {
    console.log("db connected");
  }
});

function getUsers() {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM user";
    let User = connection.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
}
function createUser(userSchema) {
  return new Promise(function (resolve, reject) {
    let sql = "INSERT INTO user SET ?";
    let User = connection.query(sql, userSchema, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
}

function updateUser(req) {
  return new Promise(function (resolve, reject) {
    const userName = req.body.userName;
    const userschema = {
      firstname: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };
    let sql = `UPDATE user SET ? WHERE userName = ? `;
    let User = connection.query(sql, [userschema, userName], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
}

function deleteUser(req) {
  return new Promise(function (resolve, reject) {
    let userName = { userName: req.params.userName };
    let sql = `DELETE FROM user WHERE ?`;
    let User = connection.query(sql, userName, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
}
module.exports = { connection, getUsers, createUser, updateUser, deleteUser };
