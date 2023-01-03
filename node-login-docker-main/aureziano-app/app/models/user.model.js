module.exports = (sequelize, Sequelize) => {
  const Usuarios = sequelize.define("usuarios", {
    nome: {
      type: Sequelize.STRING
    },
    pwd: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    idade: {
      type: Sequelize.INTEGER
    },
    // published: {
    //   type: Sequelize.BOOLEAN
    // }
  });

  return Usuarios;
};
