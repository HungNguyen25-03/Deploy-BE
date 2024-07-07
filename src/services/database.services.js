const sql = require("mssql");
require("dotenv").config();

const sqlConfig = {
  user: "sa",
  password: "YourStrong!Passw0rd",
  server: "localhost",
  port: 22112,
  database: "MilkShop",
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
  },
};

const poolPromise = new sql.ConnectionPool(sqlConfig)
  .connect()
  .then((pool) => {
    console.log("Connected to the database.");
    return pool;
  })
  .catch((err) => {
    console.error("Database connection failed: ", err);
    throw err;
  });

module.exports = {
  sql,
  poolPromise,
};
