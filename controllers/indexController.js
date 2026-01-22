//import data
const postgres = require('../db/queries.js');
const { post } = require('../routes/indexRouter.js');
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
async function updateItemPage(req, res) {
    const id = Number(req.params.id);
    const item = await postgres.getItem(id);
    const categories = await postgres.getAllCategories();        
    console.log(item)
    console.log(categories)
    res.render('editPage', {item, categories});
}
async function updateCategoryPage(req, res) {
    const id = Number(req.params.id);
    const category = await postgres.getCategory(id);
    res.render('editCatregory',{category});
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
    //expects {id , name, quantity, category}
    await postgres.updateItem(req.body)

    res.redirect('/Items')
}
async function updateCategory(req, res) {
    //expects {id, name}
    await postgres.updateCategory(req.body);
    res.redirect('/Category');
}

module.exports = {
    getHome,
    getCategories,
    getItems,
    addItem,
    addCategory,
    updateItem,
    updateItemPage,
    updateCategoryPage,
    updateCategory
}