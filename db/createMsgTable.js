#! /usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        message TEXT,
        username TEXT,
        added TIMESTAMP DEFAULT Now()
    );
    
    INSERT INTO messages (message, username)
    VALUES ('Hello World!', 'Snowfxl');
`;

async function main() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

main();
