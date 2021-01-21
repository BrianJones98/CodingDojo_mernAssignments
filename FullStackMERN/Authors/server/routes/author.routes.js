const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.get('/api/authors/:id', AuthorController.findSingleAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
}