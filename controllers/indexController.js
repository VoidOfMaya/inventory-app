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
    console.log(items)
    res.render('items',{items : items});
}

module.exports = {
    getHome,
    getCategories,
    getItems
}