/* Quentin Parmentier  */
const Product = require('../models/product');

function getCatalog(req,res){
        console.log("getCatalog");
        Product.find().exec()
        .then(products => {
            return res.send({
                success: true,
                data: { products }
            });
        })
        .catch(err => {
            return res.send({
                success: false,
                message: 'Unexpected Error.'
            });
        });
 
}



module.exports = {
	getCatalog
}