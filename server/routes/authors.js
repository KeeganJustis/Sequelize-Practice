const express = require('express');
const router = express.Router();
const db = require('../db/models');



router.get('/', (req, res) => {
    db.Author
        .findAll()
        .then(authors => (res.status(200).json(authors)))
        .catch(err => res.status(500).send('An internal server error has occured'));

});

router.get('/:id', (req, res) => {
    var ida = req.params.id;
    db.Author
        .findById(ida)
        .then(authors => (authors ? res.status(200).json(authors) : res.status(404).send('author nto found')))
        .catch(err => res.status(500).send('An internal server error has occured'));

});

router.get('/:id/blogs', (req, res) => {
    var ida = req.params.id;
    db.Blog
        .findAll({
            where: {
                authorId: ida
            }
        })
        .then(blogs => (res.status(200).json(blogs)))
        .catch(err => res.status(500).send('An internal server error has occured'));

});

router.post('/', (req, res) => {
    db.Author
        .create(req.body)
        .then(authors => (res.status(201).json(authors)))
        .catch(err => res.status(500).send('An internal server error has occured'));

});

router.put('/:id', (req, res) => {
    var ida = req.params.id;
    db.Author
        .update(req.body, {
            where: {
                id: ida
            }
        })
        .then(authors => {
            res.status(204).json(authors);
        })
        .catch(err => res.status(500).send('An internal server error has occured'));

});

router.delete('/:id', (req, res) => {
    var ida = req.params.id;
    db.Author
        .findById(ida)
        .then(author => author.destroy())
        .then(authors => {
            res.status(200).json(authors);
        })
        .catch(err => res.status(500).send('An internal server error has occured'));
});










module.exports = router;
