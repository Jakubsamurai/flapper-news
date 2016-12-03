var express = require('express');
var router = express.Router();
// import mongoose
var mongoose = require('mongoose');
// get handles for the Post and Comment models
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

/* GET home page for Posts. Returns JSON with all posts. */
router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
      if(err){ return next(err); }
      res.json(posts);
  });
});

/* POST a new Post */
router.post('/posts', function(req,res, next){
    var post = new Post(req.body);
    post.save(function(err,post){
        if(err){ return next(err); }
        res.json(post);
    });
});

module.exports = router;
