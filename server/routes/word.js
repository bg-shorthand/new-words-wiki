const router = require('express').Router();
const Word = require('../models/word');
const generateResponse = require('../module/generateResponse');
const verifyToken = require('../middleware/verifyToken');

router.get('/', async (req, res) => {
  try {
    const { title } = req.query;

    const word = await Word.findOneByTitle(title);
    if (word) res.send(generateResponse.success(word));
    else res.send(generateResponse.fail('검색 결과가 없습니다.'));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

router.get('/all', async (req, res) => {
  try {
    const words = await Word.findAll();
    const titles = words.map((word) => word.title);
    res.send(generateResponse.success(titles));
  } catch (e) {
    res.send(generateResponse.fail(e));
  }
});

router.post('/', verifyToken, async (req, res) => {
  try {
    const word = req.body;
    const newWord = await Word.create(word);
    res.send(generateResponse.success({ success: true, data: newWord }));
  } catch (e) {
    console.log(e);
    if (e.code === 11000) {
      const errMsg = '이미 등록된 신조어입니다.';
      res.send(generateResponse.fail(errMsg));
    } else res.send(generateResponse.fail(e));
  }
});

module.exports = router;
