const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.machine1 = require("../models/machine.model.js")(sequelize, Sequelize);
db.machine2 = require("./machineTwo.model")(sequelize, Sequelize);
db.machine3 = require("./machineThree.model")(sequelize, Sequelize);
db.machine4 = require("./machineFour.model")(sequelize, Sequelize);
db.machine5 = require("./machineFive.model")(sequelize, Sequelize);
db.machine6 = require("./machineSix.model")(sequelize, Sequelize);
db.machine7 = require("./machineSeven.model")(sequelize, Sequelize);
db.machine8 = require("./machineEight.model")(sequelize, Sequelize);
db.machine9 = require("./machineNine.model")(sequelize, Sequelize);
db.machine10 = require("./machineTen.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.ROLES = ["user", "admin"];

module.exports = db;
