const { Client } = require("pg");
const { argv } = require("node:process");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 25 ),
  message_text TEXT,
  added_date DATE DEFAULT NOW()
);

INSERT INTO messages (username, message_text)  
VALUES
  ('Yevgen', 'Hello there new Database!'),
  ('Amado', 'Hi There!'),
  ('Charles', 'Hello World!');
`;

let dbAddress = argv[2];
console.log(dbAddress);

async function execute() {
  console.log("seeding...");
  const client = new Client({
    connectionString: dbAddress,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("client has disconnected");
}

execute();
