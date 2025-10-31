const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY added DESC"
  );
  return rows;
}

async function createNewMessage(username, message) {
  await pool.query("INSERT INTO messages (message, username) VALUES ($1, $2)", [
    message,
    username,
  ]);
}

async function viewMessage(id) {
  const { rows } = await pool.query(
    "SELECT message FROM messages WHERE id = $1",
    [id]
  );
  return rows;
}
module.exports = { getAllMessages, createNewMessage, viewMessage };
