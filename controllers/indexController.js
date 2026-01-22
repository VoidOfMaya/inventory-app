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

    res.render('editPage', {item, categories});
}
async function updateCategoryPage(req, res) {
    const id = Number(req.params.id);
    const category = await postgres.getCategory(id);
    res.render('editCatregory',{category});
}
async function deleteCategoryPage(req, res) {
    const category = await postgres.getCategory(req.params.id);
    res.render('deleteCategory',{category});
}

//post
async function addItem(req, res){
    const item = req.body
   
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
    await postgres.updateItem(req.query)

    res.redirect('/Items')
}
async function updateCategory(req, res) {
    //expects {id, name}
    await postgres.updateCategory(req.body);
    res.redirect('/Category');
}
//delet
async function deleteCategory(req, res) {
    try{
        await postgres.deleteCategory(Number(req.params.id));
        res.redirect('/Category') ;   
    }catch(error){
        if (error.code === '23503'){
        }else{

            console.log(`controller side: ${error}`);
        }
    }
   
}

module.exports = {
    //create
    addItem,
    addCategory,
    //read
    getHome,
    getCategories,
    getItems,
    //update
    updateItem,
    updateItemPage,
    updateCategoryPage,
    updateCategory,
    //delete
    deleteCategoryPage,
    deleteCategory,
}