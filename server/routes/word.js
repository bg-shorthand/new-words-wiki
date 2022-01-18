const router = require('express').Router();
const Word = require('../models/word');
const generateResponse = require('../module/generateResponse');

router.get('/', async (req, res) => {
  try {
    const { title } = req.query;

    const word = await Word.findOne(title);
    res.send(generateResponse.success({ ...word }));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

router.post('/', async (req, res) => {
  try {
    const word = req.body;
    const newWord = await Word.create(word);
    res.send(generateResponse.success({ success: true, data: newWord }));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

module.exports = router;
