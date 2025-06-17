// models/todo.js
const todoModel = {
  tableName: "todos",
  columns: {
    id: "VARCHAR(36) PRIMARY KEY", // String-based ID (e.g., UUID)
    title: "VARCHAR(255) NOT NULL",
    description: "TEXT", // Can be NULL or filled with text
    completed: "BOOLEAN DEFAULT FALSE", // For tracking completion status
    user_id: "VARCHAR(36) NOT NULL", // Assuming user_id is a string (e.g., UUID)
  },
  createTable() {
    const columns = Object.entries(this.columns)
      .map(([column, definition]) => `${column} ${definition}`)
      .join(", ");

    return `CREATE TABLE IF NOT EXISTS ${this.tableName} (${columns})`;
  },
};

module.exports = todoModel;
