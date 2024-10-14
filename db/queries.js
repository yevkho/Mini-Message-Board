const { Pool } = require("pg");

const pool = new Pool();

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(message) {
  await pool.query(
    "INSERT INTO messages(username, message_text) VALUES ($1, $2)",
    [message.author, message.message]
  );
}

async function getMessageById(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageId,
  ]);
  return rows[0];
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessageById,
};
