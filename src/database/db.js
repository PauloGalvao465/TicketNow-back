const Sequelize = require("sequelize");

const sequelize = new Sequelize("db_ticketnow", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("conexao do Banco SUCESSO");
  })
  .catch(function () {
    console.log("ERRO: Erro na conexao do Banco");
  });

module.exports = sequelize;
// async function connect() {
//   if (global.connection && global.connection.state !== "disconnected")
//     return global.connection;
//   const mysql = require("mysql2/promise");
//   const connection = await mysql.createConnection(
//     "mysql://root@localhost:3306/db_ticketnow"
//   );
//   global.connection = connection;
//   console.log("conectou no MySQL!");
//   return connection;
// }

// connect();

// module.exports = {};
