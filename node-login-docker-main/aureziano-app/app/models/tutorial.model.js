module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    // Id: {
    //   type: Sequelize.INTEGER
    // },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};
