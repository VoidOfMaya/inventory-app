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
//create
async function createItem(result){
  await pool.query(`
    INSERT INTO item (name, quantity, category)
    VALUES ($1, $2, $3)`,[result.itmName,result.itmQuantity,result.itmCategory]);
};
async function createCategory(result){
  await pool.query(`
    INSERT INTO category (name)
    VALUES ($1)`,[result.ctgyName]);
};
//Read
async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM category");
  return rows;
};
async function getAllItems() {
  const { rows } = await pool.query("SELECT  i.id, c.name AS category_name, i.name AS item_name, i.quantity  FROM item AS i INNER JOIN category AS c ON i.category = c.id");
  return rows;
};
async function getItem(id) {
  const {rows } = await pool.query(
    `SELECT * FROM item WHERE item.id = $1`,
    [id]
  );
  return rows[0];
};
async function getCategory(id) {
  const {rows } = await pool.query(
    `SELECT * FROM category WHERE category.id = $1`,
    [id]
  );
  return rows[0];
};
//update : 
//result ={id , name, quantity, category}
async function updateItem(result) {
  await pool.query(
    `
    UPDATE item
    SET name = $1,
        quantity = $2,
        category = $3
    WHERE id= $4  

    `,[result.name,result.quantity,result.category,result.id]);
}
//result = {id, name}
async function updateCategory(result) {
  await pool.query(`
    UPDATE category
    SET name = $1
    WHERE id = $2
    `,[result.name, result.id]);
}


//delete
async function deleteItem(){};
async function deleteCategory(id){
    await pool.query(`
    DELETE FROM category WHERE category.id = $1`,[id]);
};






async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
  //note the $1 in the query is a parameter else the query would lookl ike this:
  //await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");
  //pg provides query parameterization to prevent this. Instead of passing user input directly,
  //  we pass it in an array as the second argument. pg handles the rest
}

module.exports = {
  //c
  createCategory,

  createItem,
  //r
  getAllCategories,
  getCategory,

  getAllItems,
  getItem,
  
  //u
  updateCategory,

  updateItem,
  //d
  deleteCategory,

  deleteItem,
};