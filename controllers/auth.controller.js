const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Machine1 = db.machine1;
const Machine2 = db.machine2;
const Machine3 = db.machine3;
const Machine4 = db.machine4;
const Machine5 = db.machine5;
const Machine6 = db.machine6;
const Machine7 = db.machine7;
const Machine8 = db.machine8;
const Machine9 = db.machine9;
const Machine10 = db.machine10;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//sign up controller
exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    branch: req.body.branch,
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//edit user controller
exports.updateUser = (req, res) => {
  const id = req.params.id;

  User.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating User with id=${id} error msg =` + err.message,
      });
    });
};

//delete user controller
exports.deleteUser = (req, res) => {
  const id = req.params.id;

  User.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `could not delete User with id= ${id}` + err.message,
      });
    });
};

//signIn controller

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          roles: authorities,
          branch: user.branch,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//get table1 data
exports.userBoard = (req, res) => {
  Machine1.findAll({ attributes: ["Income", "date", "time", "Device_ID"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
//get table2 data
exports.userBoardTwo = (req, res) => {
  Machine2.findAll({ attributes: ["Income", "date", "time", "Device_ID"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
//get table3 data
exports.userBoardThree = (req, res) => {
  Machine3.findAll({ attributes: ["Income", "date", "time", "Device_ID"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
//get table4 data
exports.userBoardFour = (req, res) => {
  Machine4.findAll({ attributes: ["Income", "date", "time", "Device_ID"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
//get table5 data
exports.userBoardFive = (req, res) => {
  Machine5.findAll({ attributes: ["Income", "date", "time", "Device_ID"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
//get table6 data
exports.userBoardSix = (req, res) => {
  Machine6.findAll({ attributes: ["Income", "date", "time", "Device_ID"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
//get table7 data
exports.userBoardSeven = (req, res) => {
  Machine7.findAll({ attributes: ["Income", "date", "time", "Device_ID"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
//get table8 data
exports.userBoardEight = (req, res) => {
  Machine8.findAll({ attributes: ["Income", "date", "time", "Device_ID"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
//get table9 data
exports.userBoardNine = (req, res) => {
  Machine9.findAll({ attributes: ["Income", "date", "time", "Device_ID"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
//get table10 data
exports.userBoardTen = (req, res) => {
  Machine10.findAll({ attributes: ["Income", "date", "time", "Device_ID"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};

//admin board retrieve all user controller
exports.adminBoard = (req, res) => {
  User.findAll({
    attributes: ["id", "username", "branch"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
