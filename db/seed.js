#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS category (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar (25)
);
CREATE TABLE IF NOT EXISTS item(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(25),
  category INTEGER REFERENCES category(id),
  quantity INTEGER
);

INSERT INTO category (name)
VALUES
  ('dairy'),
  ('meat'),
  ('fruite');

INSERT INTO item (name, category, quantity)
VALUES
  ('milk', 1, 2),
  ('chicken breast', 2, 6),
  ('strawbery', 3, 24);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();