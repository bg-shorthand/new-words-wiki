const router = require('express').Router();
const Community = require('../models/community');
const generateResponse = require('../module/generateResponse');

router.get('/:page', async (req, res) => {
  try {
    const allPosts = await Community.findAll();
    const { page } = req.params;
    const start = (page - 1) * 10;
    const end = start + 10;
    const posts = allPosts
      .sort((a, b) => b.time - a.time)
      .slice(start, end)
      .map(({ title, time, author, number, comments, _id, score }) => ({
        title,
        time,
        author,
        number,
        id: _id,
        commentNum: comments.length,
        score,
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
    const number = allPosts.length ? Math.max(...allPosts.map((post) => +post.number)) + 1 : 1;
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

router.put('/post/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const data = await Community.updateById(id, payload);
    res.send(generateResponse.success(data));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

router.post('/comment/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const post = await Community.findPostById(id);
    const number = post.comments.length
      ? Math.max(...post.comments.map((comment) => comment.number)) + 1
      : 1;
    const newComment = [...post.comments, { ...payload, number }];
    const data = await Community.updateCommentsById(id, newComment);
    res.send(generateResponse.success(data));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

router.delete('/comment/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { commentNumber } = req.query;
    const { comments } = await Community.findPostById(id);
    const newComments = comments.filter((comment) => comment.number !== +commentNumber);
    const data = await Community.updateCommentsById(id, newComments);
    res.send(generateResponse.success(data));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

router.put('/comment/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const { comments } = await Community.findPostById(id);
    const newComments = comments.map((comment) =>
      comment.number === payload.number ? payload : comment,
    );
    const data = await Community.updateCommentsById(id, newComments);
    res.send(generateResponse.success(data));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

module.exports = router;
