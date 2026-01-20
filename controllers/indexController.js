//import data

//code:
async function getHome(req, res){
    res.render('index');
}
async function getCategories(req, res){
    res.render('categories');
}
async function getItems(req, res){
    res.render('items');
}

module.exports = {
    getHome,
    getCategories,
    getItems
}