/* Quentin Parmentier et Fabian Grandjean */
const stockController = require('./controllers/stock');
module.exports.set = (app) => {
    app.get('/:magasin/:id/Nombre',stockController.nombreArticle);
    app.put('/:magasin/:id/augmentation/:augmentation',stockController.ajouterArticle);
    app.put('/:magasin/:id/diminution/:diminution',stockController.diminuerArticle);
    //app.get('/stock');//par magasin pour une liste de produit
    //app.get('/stock/:id'); //par magasin pour un produit
    //app.post('/add');
    //app.post('/add/:id'); //par magasin pour une liste de produit
    //app.post('/delete');
    //app.post('/delete/:id');

}