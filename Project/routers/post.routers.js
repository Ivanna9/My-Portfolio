const { Router } = require('express');
const postController = require('../controller/post.controller');
const router = new Router();
console.log(postController)

 router.post('/post', postController.createPost);
 router.get('/post', postController.getPostsByPerson);

module.exports = router;
