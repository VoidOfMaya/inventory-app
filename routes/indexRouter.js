//tools
const {Router}= require('express');
//controllers
const control = require('../controllers/indexController.js')

const indexRouter =Router();
//get
indexRouter.get('/',control.getHome);
indexRouter.get('/Category',control.getCategories);
indexRouter.get('/Items',control.getItems);
indexRouter.get('/Item/:id', control.updateItemPage);
indexRouter.get('/Category/:id', control.updateCategoryPage);
indexRouter.get('/Category/:id/Delete', control.deleteCategoryPage);
indexRouter.get('/Item/:id/Delete', control.deleteItemPage);

//post
indexRouter.post('/Category',control.addCategory);
indexRouter.post('/Items',control.createItemValidaiton, control.addItem);

indexRouter.post('/update-itm',control.editItemValidation, control.updateItem);
indexRouter.post('/update-ctgry',control.updateCategory);

//delete
indexRouter.delete('/Category/:id/Delete/',control.deleteCategory);
indexRouter.delete('/Item/:id/Delete/',control.deleteItem);


module.exports = indexRouter
