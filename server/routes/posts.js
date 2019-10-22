const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

const { ensureAuthenticated } = require('../config/auth');


// retrieves all the posts ✔️
router.get('/list', (req, res) => {
    Post.find({}).sort({updatedAt: 'descending'}).exec((err, posts) => {
      if (err) return res.status(404).send('Error while getting posts!');
      return res.json({posts});
    });
  });
   
  // create a new post ✔️
  router.post('/create', (req, res) => {
    const post = new Post({name: req.body.name, title: req.body.title, post: req.body.post});
    console.log(post)
    post.save( (err) => {
      if (err) return res.status(404).send({message: err.message});      
      return res.send({ post });
    });
  });
   
  // update an existing post with the given object id
  router.post('/update/:id', (req, res) => {
  let options = { new: true };
    Post.findByIdAndUpdate(req.params.id, req.body.data , options, (err, post) => {
      if (err) return res.status(404).send({message: err.message});
      return res.send({ message: 'post updated!', post });
    });
  });
   
  // delete an existing post with the given object id
  router.post('/delete/:id', (req,res) => {
    Post.findByIdAndRemove(req.params.id, (err) => {
      if (err) return res.status(404).send({message: err.message});
      return res.send({ message: 'post deleted!' });
    });
  });
  

  module.exports = router;