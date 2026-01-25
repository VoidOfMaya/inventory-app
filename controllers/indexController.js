//import data
const postgres = require('../db/queries.js');
const { post } = require('../routes/indexRouter.js');
const {query,param, body, matchedData, validationResult} = require('express-validator')

// category validation:

// items validation:
const createItemValidaiton =
[ 
    body('itmName')
    .trim()
    .notEmpty()
    .matches(/^[A-Za-z ]+$/)
    .isLength({max: 8, min: 3})
    .withMessage('name invalid, please enter a valid name'),
    body('itmQuantity')
    .notEmpty()
    .isNumeric()
    .isLength({max:50, min: 1})
    .withMessage('number invalid, pelase enter a valid number between 1 sand 50'),
    body('itmCategory')
    .notEmpty()
    .withMessage('pleas select an apropriate category'),
]
//editing array
const editItemValidation =
[
    body('id')
    .exists().withMessage(`id is required`)
    .isInt()
    .toInt(),
    body('name')
    .trim().notEmpty()
    .matches(/^[A-Za-z ]+$/)
    .isLength({max: 8, min: 3})
    .withMessage('name invalid, please enter a valid name'),
    body('quantity')
    .notEmpty()
    .isNumeric()
    .isLength({max:50, min: 1})
    .withMessage('number invalid, pelase enter a valid number between 1 sand 50'),
    body('category')
    .isInt()
    .toInt()
    .withMessage('pleas select an apropriate category'),
]
// Category validation:
const createCategoryValidation =[
    body('ctgyName')
    .trim()
    .notEmpty().withMessage('category name is required')
    .matches(/^[A-Za-z ]+$/).withMessage('name must contain only letters: a to z, A - Z')
    .isLength({max: 12, min: 3}).withMessage('name must be between 12 -3 charecters'),
]
//editing array
const editCategoryValidation = [
    body('id')
    .exists().withMessage(`id is required`)
    .isInt()
    .toInt(),
    body('name')
    .trim()
    .notEmpty().withMessage('category name is required')
    .matches(/^[A-Za-z ]+$/).withMessage('name must contain only letters: a to z, A - Z')
    .isLength({max: 12, min: 3}).withMessage('name must be between 12 -3 charecters'),
]
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
async function deleteItemPage(req, res) {
    const item = await postgres.getItem(req.params.id);
    res.render('deleteItem',{item});
}

//post
async function addItem(req, res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(`Controller_ERROR/ create /item: ${errors.array()}`);
        res.redirect(`/Items`);
    }
    const item = matchedData(req)

    console.log(item);
    await postgres.createItem(item);
    res.redirect('/Items');
};
async function addCategory(req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(`Controller_ERROR/ add /category: ${errors.array()}`);
        res.redirect(`/Category`);
    }
    const ctgry = matchedData(req)

    //console.log(ctgry);

    await postgres.createCategory(ctgry);
    res.redirect('/Category')
};
//update
async function updateItem(req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(`Controller_ERROR/ edit /item: ${errors.array()}`);
        res.redirect(`/Items`);
    }
    const item = matchedData(req);
    console.log(item)
    //expects {id , name, quantity, category}
    await postgres.updateItem(item)

    res.redirect(`/Items`)
};
async function updateCategory(req, res) {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(`Controller_ERROR/ edit /category: ${errors.array()}`);
        res.redirect(`/Category`);
    }
    const ctgry = matchedData(req)

    console.log(ctgry);
    //expects {id, name}
    await postgres.updateCategory(ctgry);
    res.redirect('/Category');
};
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
   
};
async function deleteItem(req, res) {
    try{
        await postgres.deleteItem(Number(req.params.id));
        res.redirect('/Items') ;   
    }catch(error){
        if (error.code === '23503'){
        }else{

            console.log(`controller side: ${error}`);
        }
    }
   
};

module.exports = {
    //VALIDATORS:
    createItemValidaiton,
    editItemValidation,

    createCategoryValidation,
    editCategoryValidation,

    //CONTROLLERS:

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
    
    deleteItemPage,
    deleteItem,
}