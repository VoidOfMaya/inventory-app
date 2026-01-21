//tools
const {Router}= require('express');
//controllers
const {getHome, getCategories, getItems, addItem} = require('../controllers/indexController.js')

const indexRouter =Router();
//get
indexRouter.get('/',getHome);
indexRouter.get('/Category',getCategories);
indexRouter.get('/Items',getItems);

//post
//indexRouter.post('/Category');
indexRouter.post('/Items', addItem);


module.exports = indexRouter
