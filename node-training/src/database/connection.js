const mysql2 = require("mysql2/promise");
require("dotenv").config();

let connection = null;
async function connectDB() {
  if (connection) {
    return connection;
  }
  connection = await mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_ROOT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  console.log("connected to the database");
  //   console.log("connection", connection);
}

module.exports = { connectDB };
