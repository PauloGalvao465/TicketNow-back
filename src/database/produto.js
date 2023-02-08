const Sequelize = require("sequelize");
const sequelize = require("./db");

const database = require("./db");

const Produto = database.define("produto", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING(150),
    allowNull: false,
  },

  preco: Sequelize.DECIMAL,
  descricao: Sequelize.STRING,
});

module.exports = Produto;
