const Product = require("../models/Product.model");

module.exports.getAllProducts = (_req, res) =>{
    Product.find()
        .then(allProducts => res.json({allProducts: allProducts}))
        .catch(err => res.json({error: err}));
};

module.exports.createProduct = (req, res) =>{
    Product.create(req.body)
        .then(newProduct => res.json({product: newProduct}))
        .catch(err => res.json({error: err}));
};

module.exports.findSingleProduct = (req, res) =>{
    Product.findOne({_id: req.params.id})
        .then(product => res.json({product: product}))
        .catch(err => res.json({error: err}));
};

module.exports.updateProduct = (req, res) =>{
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedProduct => res.json({updatedProduct}))
        .catch(err => res.json({error: err}))
}

module.exports.deleteProduct = (req, res) =>{
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json({deleteConfirmation}))
        .catch(err => res.json({error: err}))
}