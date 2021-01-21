const Author = require('../models/author.model');

module.exports.getAllAuthors = (_req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
}

module.exports.createAuthor = (req, res) => {
    const {name} = req.body;
    Author.create({name: name})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

module.exports.findSingleAuthor = (req, res) => {
    const {id} = req.params;
    Author.findById(id)
        .then(author => res.json(author))
        .catch(err => res.json(err));
}

module.exports.deleteAuthor = (req, res) => {
    const {id} = req.params;
    Author.findByIdAndDelete(id)
        .then(() => res.json({success: true}))
        .catch(err => res.json(err));
}

module.exports.updateAuthor = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    Author.findByIdAndUpdate(id, {name: name}, {new: true, runValidators: true})
        .then(updated => res.json(updated))
        .catch(err => res.status(400).json(err));
}