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

router.post('/', async (req, res) => {
  try {
    const allPosts = await Community.findAll();
    const post = req.body;
    const newPost = await Community.create({ ...post, number: allPosts.length + 1 });
    res.send(generateResponse.success(newPost));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

router.delete('/', verifyToken, async (req, res) => {
  try {
    const { title } = req.query;
    const data = await Community.deleteByTitle(title);
    res.send(generateResponse.success(data));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

module.exports = router;
