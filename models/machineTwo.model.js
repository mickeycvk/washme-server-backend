module.exports = (sequelize, Sequelize) => {
    const Machine2 = sequelize.define(
      `Device_02`,
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
  
    return Machine2;
  };
  