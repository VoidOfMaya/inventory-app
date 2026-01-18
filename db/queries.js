const pool = require('./pool');

//this assumes a postegres database with the following:
/*
usernames.db:

username_seq_id | username
(INTEGER)       | VARCHAR(255)
----------------|---------
 1              | david
 2              | alphanzo
 3              | keren
*/
async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
  //note the $1 in the query is a parameter else the query would lookl ike this:
  //await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");
  //pg provides query parameterization to prevent this. Instead of passing user input directly,
  //  we pass it in an array as the second argument. pg handles the rest
}

module.exports = {
  getAllUsernames,
  insertUsername
};