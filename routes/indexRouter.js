//tools
const {Router}= require('express');
//controllers
const {getHome, getCategories, getItems} = require('../controllers/indexController.js')

const indexRouter =Router();
//get
indexRouter.get('/',getHome);
indexRouter.get('/Category',getCategories);
indexRouter.get('/Items',getItems);

module.exports = indexRouter
