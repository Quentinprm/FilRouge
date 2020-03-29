const Type = require('../models/type');

function getType(req,res){
   Type.find().exec()
   .then(types => {
        return res.send({
            success: true,
            data: { types }
        });
    })
    .catch(err => {
        return res.send({
            success: false,
            message: 'Unexpected Error.'
        });
    });   
}

function getTypeById(req,res){
    Type.findById(req.params.id).exec()
    .then(type => {
        return res.send({
            success: true,
            data: { type }
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
    getType,
	getTypeById
}