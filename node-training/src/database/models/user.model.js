// models/user.js
const userModel = {
  tableName: "users",
  columns: {
    id: "VARCHAR(36) PRIMARY KEY",
    username: "VARCHAR(100) NOT NULL",
    password: "VARCHAR(100) NOT NULL UNIQUE",
    role: "ENUM('admin', 'user', 'mod') NOT NULL",
  },
  createTable() {
    const columns = Object.entries(this.columns)
      .map(([column, definition]) => `${column} ${definition}`)
      .join(", ");

    return `CREATE TABLE IF NOT EXISTS ${this.tableName} (${columns})`;
  },
};

module.exports = userModel;