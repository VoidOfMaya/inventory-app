//tools
const {Router}= require('express');
//controllers
const {getHome, getCategories, getItems, addItem, addCategory, updateItem} = require('../controllers/indexController.js')

const indexRouter =Router();
//get
indexRouter.get('/',getHome);
indexRouter.get('/Category',getCategories);
indexRouter.get('/Items',getItems);

//post
indexRouter.post('/Category',addCategory);
indexRouter.post('/Items', addItem);
indexRouter.post('/update-itm',updateItem)


module.exports = indexRouter
