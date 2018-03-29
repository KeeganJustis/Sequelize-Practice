const express = require('express');
const router = express.Router();
const db = require('../db/models/');

router.get('/', (req, res) => {

    db.Blog
        .findAll()
        .then(blogs => (res.status(200).json(blogs)))
        .catch(err => res.status(500).send('An internal server error has occured'));

});

router.get('/featured', (req, res) => {
    db.Blog
        .findAll({
            where: {
                featured: true,
            }
        })
        .then(blogs => (res.status(200).json(blogs)))
        .catch(err => res.status(500).send('An internal server error has occured'));

});

router.get('/:id', (req, res) => {
    var blogId = req.params.id;
    db.Blog
        .findById(blogId)
        .then(blogs => (blogs ? res.status(200).json(blogs) : res.status(404).send('blog not found')))
        .catch(err => res.status(500).send('An internal server error has occured'));

});


router.post('/', (req, res) => {
   
    let blogData = req.body;
    var theAuthorId=parseInt(req.query.authorId);
    blogData.authorId=theAuthorId;

  
    db.Blog
        .create(blogData)
        .then(blog => {
            console.log('Our created blog is', blogData);
            // Associate this to the Author
            res.status(201).json(blog);
        })
        .catch(err => res.status(500).send('An internal server error has occured'));
});







router.put('/:id', (req, res) => {

    var idBlog = req.params.id;
    var theData = req.body;
    db.Blog
        .update(theData, {
            where: {
                id: idBlog
            }
        })
        .then(blogs => {
            res.status(204).json(blogs);
        })
        .catch(err => res.status(500).send('An internal server error has occured'));
});





router.delete('/:id', (req, res) => {
    var idBlogs = req.params.id;
    console.log('hello');
    db.Blog
        .findById(idBlogs)
        .then(blogs => blogs.destroy())
        .then(blogs => {
            res.status(200).json(blogs);
        })
        .catch(err => res.status(500).send('An internal server error has occured'));
});








module.exports = router;