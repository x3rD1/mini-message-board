const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function createNewMessage(username, message) {
  await pool.query("INSERT INTO messages (message, username) VALUES ($1, $2)", [
    message,
    username,
  ]);
}

module.exports = { getAllMessages, createNewMessage };
