module.exports = (sequelize, Sequelize) => {
    const Machine4 = sequelize.define(
      `Device_04`,
      {
        Income: {
          type: Sequelize.INTEGER(11),
        },
        date: {
          type: Sequelize.DATE,
        },
        time: {
          type: Sequelize.TIME,
        },
        Device_ID: {
          type: Sequelize.INTEGER(11),
        },
      },
      { freezeTableName: true }
    );
  
    return Machine4;
  };
  