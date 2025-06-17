const { connectDB } = require("./connection");
const todoModel = require("./models/todo.model");
const userModel = require("./models/user.model");

const populateDB = async () => {
  try {
    const connection = await connectDB();

    const createUsersTableSQL = userModel.createTable();
    const createTodosTableSQL = todoModel.createTable();

    // Create Users table
    await connection.query(createUsersTableSQL);
    // console.log("Users table created");

    // Create Todos table
    await connection.query(createTodosTableSQL);
    // console.log("Todos table created");
    // console.log(`Database ${DB_NAME} populated successfully.`);
    // });
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};

module.exports = populateDB;
