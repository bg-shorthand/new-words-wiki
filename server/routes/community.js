const router = require('express').Router();
const Community = require('../models/community');
const generateResponse = require('../module/generateResponse');
const verifyToken = require('../middleware/verifyToken');

router.get('/:page', async (req, res) => {
  try {
    const allPosts = await Community.findAll();
    const { page } = req.params;
    const start = (page - 1) * 10;
    const end = start + 10;
    const posts = allPosts
      .sort((a, b) => b.time - a.time)
      .slice(start, end)
      .map(({ title, time, author, number, comment, _id }) => ({
        title,
        time,
        author,
        number,
        id: _id,
        commentNum: comment.length,
      }));
    res.send(generateResponse.success({ posts, allLength: allPosts.length }));
  } catch (e) {
    res.send(generateResponse.fail(e));
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Community.findPostById(id);
    res.send(generateResponse.success(post));
  } catch (e) {
    res.send(generateResponse.fail('게시글이 없습니다.'));
  }
});

router.post('/', async (req, res) => {
  try {
    const allPosts = await Community.findAll();
    const number = Math.max(...allPosts.map((post) => +post.number)) + 1;
    const post = req.body;
    const newPost = await Community.create({ ...post, number });
    res.send(generateResponse.success(newPost));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

router.delete('/post/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const data = await Community.deleteById(id);
    res.send(generateResponse.success(data));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

module.exports = router;
