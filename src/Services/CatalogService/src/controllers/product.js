/* Quentin Parmentier  */
const Product = require('../models/product');

function getProduct(req,res){
    Product.findById(req.params.id).exec().then(product => {
        return res.send({
            success: true,
            data: { product }
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
	getProduct
}