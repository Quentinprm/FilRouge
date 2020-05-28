/* Quentin Parmentier  et Fabian Grandjean*/
//const Product = require('../models/product');



function nombreArticle(req,res) {
    var FileRead = fs.readFileSync("ArticleData.json");
    var FileJSON = JSON.parse(FileRead);

    for (var Article in FileJSON) {
        if (Article.id == req.body.id) {
            //return res.json(json.parse({ "resulte": Article.Quantite }));
            res.send({
                success : true,
                quantite : Article.Quantite
            });
        }
    }
    res.send({
        success : false,
        message : 'id no found'

    });
    //return res.json(json.parse({ "error": "identifiant invalide" }));
};

function ajouterArticle(req,res){
    var FileRead = fs.readFileSync("ArticleData.json");
    var FileJSON = JSON.parse(FileRead);

    for (var Article in FileJSON) {
        if (Article.id == req.body.id) {
            Article.Quantite = Article.Quantite + res.body.augmentation
            var SaveFile = JSON.stringify(FileJSON);
            fs.writeFileSync("ArticleData.json", SaveFile);
            res.send({
                success: true
            });
            //return res.json(json.parse({ "resulte": "ajout éffectué" }));
        }
    }
    res.send({
        success : false,
        message : 'id no found'

    });
    //return res.json(json.parse({ "error": "L'ajout de l'article n'a pas pu etre effectué" }));
}

function diminuerArticle(req,res) {
    var FileName = req.body.magasin + "Data.json";
    var FileRead = fs.readFileSync(FileName);
    var FileJSON = JSON.parse(FileRead);

    for (var Article in FileJSON) {
        if (Article.id == req.body.id) {

            if (Article.Quantite < res.body.diminution) {
                return res.json(json.parse({ "error": "diminution invalide" }));
            }

            Article.Quantite = Article.Quantite + res.body.diminution
            var SaveFile = JSON.stringify(FileJSON);
            fs.writeFileSync("ArticleData.json", SaveFile)
            res.send({
                success: true
            });
            //return res.json(json.parse({ "resulte": "ajout éffectué" }));
        }
    }
    res.send({
        success : false,
        message : 'id no found'

    });
    //return res.json(json.parse({ "error": "La diminution de l'article n'a pas pu etre effectué" }));

}

module.exports = {
    nombreArticle,
    ajouterArticle,
	diminuerArticle
}