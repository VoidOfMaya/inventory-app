//import data
const postgres = require('../db/queries.js')
//code:
async function getHome(req, res){
    res.render('index');
}
async function getCategories(req, res){
    const category = await postgres.getAllCategories();
    res.render('categories',{category: category});
}
async function getItems(req, res){
    const items = await postgres.getAllItems();
    const categories = await postgres.getAllCategories();
    res.render('items',{items : items, ctgries: categories});
}

//post
async function addItem(req, res){
    const item = req.body
    console.log(item);
    await postgres.createItem(item);
    res.redirect('/Items');
}
async function addCategory(req, res) {
    const ctgry = req.body;
    await postgres.createCategory(ctgry);
    res.redirect('/Category')
}
//update
async function updateItem(req, res) {
    console.log(req.body);
    res.redirect('/Items')
}

module.exports = {
    getHome,
    getCategories,
    getItems,
    addItem,
    addCategory,
    updateItem,
}