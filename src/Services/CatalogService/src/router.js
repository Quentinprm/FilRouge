/* Quentin Parmentier  */
const catalogController = require('./controllers/catalog');
const productController = require('./controllers/product');
const typeController = require('./controllers/type');
module.exports.set = (app) => {
    app.get('/catalog',catalogController.getCatalog);
    app.get('/Catalog/:id',productController.getProduct);
    app.get('/type',typeController.getType);
    app.get('/type/:id',typeController.getTypeById);
}