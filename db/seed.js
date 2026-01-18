#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS company (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  company_name varchar (25)
);
CREATE TABLE IF NOT EXISTS printer_type(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  type VARCHAR(25)
);

CREATE TABLE IF NOT EXISTS printers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  printer_name VARCHAR(255),
  resulotion_mm FLOAT,
  quantity INTEGER,
  created_by INTEGER REFERENCES company(id),
  type INTEGER REFERENCES company(id)

);

INSERT INTO company (company_name)
VALUES
  ('Creality'),
  ('Elegoo'),
  ('Formlabs');

INSERT INTO printer_type (type)
VALUES
  ('FDM'),
  ('resin'),
  ('SLA');

  INSERT INTO printers (printer_name,quantity, resulotion_mm, type, created_by)
  VALUES
    ('Ender 3', 120, 0.4, 1 , 1),
    ('Marse 3', 100, 0.034, 2 , 2),
    ('Form 4', 35, 0.025, 3 , 3);
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