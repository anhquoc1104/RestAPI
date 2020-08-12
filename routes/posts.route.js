const express = require('express');

const router = express.Router();
const Post = require('../models/posts.model');

router
  //get all post
  .get('/', async (req, res) => {
    try {
      const postAll = await Post.find();
      res.json(postAll);
    } catch (err) {
        console.log(err + '');
    }
  })
  //Create a post
  .post('/', async (req, res) => {
    // console.log(req.body);
    const { title, description } = req.body;
    const post = new Post({
      title: title,
      description: description
    });
    try {
      const postData = await post.save();
      res.json(postData);
    } catch (err) {
      res.json({ message: err });
    }
  })
  //get one document by ID
  .get('/:postId', async (req, res) => {
    try {
      const postId = await Post.findById(req.params.postId);
      res.json(postId);
    } catch (err) {
      res.json({message: err});
    }
  })
  //updeate one by id
  .patch('/:postId', async (req, res) => {
    try {
      const postId = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
      res.json(postId);
    } catch (err) {
      res.json({message: err});
    }
  })
  //delete one by id
  .delete('/:postId', async (req, res) => {
    try {
      const postId = await Post.deleteOne({_id: req.params.postId});
      res.json(postId);
    } catch (err) {
      res.json({message: err});
    }
  })

module.exports = router;