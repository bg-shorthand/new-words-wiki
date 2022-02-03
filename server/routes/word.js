const router = require('express').Router();
const Word = require('../models/word');
const User = require('../models/user');
const generateResponse = require('../module/generateResponse');
const verifyToken = require('../middleware/verifyToken');
const jwt = require('jsonwebtoken');
const filterUserInfo = require('../module/filterUserInfo');
const constants = require('../const/const');

router.get('/', async (req, res) => {
  try {
    const { title } = req.query;

    const word = await Word.findOneByTitle(title);
    const related = await Word.findAllRelated(title);
    const relatedTitles = related.map((word) => word.title);
    if (word) {
      if (word.search) await Word.updateByTitle(title, { search: word.search + 1 });
      else await Word.updateByTitle(title, { search: 1 });
      res.send(generateResponse.success({ word, relatedTitles }));
    } else if (related) {
      res.send(generateResponse.fail({ word: null, relatedTitles }));
    } else res.send(generateResponse.fail('검색 결과가 없습니다.'));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

router.get('/relatedTitles', async (req, res) => {
  try {
    const { title } = req.query;

    const related = await Word.findAllRelated(title);
    const relatedTitles = related.map((word) => word.title);
    console.log(relatedTitles);
    if (relatedTitles.length) {
      res.send(generateResponse.success(relatedTitles));
    } else res.send(generateResponse.fail('검색 결과가 없습니다.'));
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

router.get('/sideMenuData', async (req, res) => {
  try {
    const words = await Word.findAll();
    const users = await User.findAll();

    let topWords = words.sort((a, b) => b.search - a.search);
    if (topWords.length > 5) topWords.length = 5;
    topWords = topWords.map((word) => word.title);

    let recentWords = words.sort((a, b) => b.time - a.time);
    if (recentWords.length > 5) recentWords.length = 5;
    recentWords = recentWords.map((word) => word.title);

    let topUsers = users.sort((a, b) => b.score - a.score);
    if (topUsers.length > 5) topUsers.lenght = 5;
    topUsers = topUsers.map((user) => user.nickname);

    res.send(generateResponse.success({ topWords, recentWords, topUsers }));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

router.post('/', verifyToken, async (req, res) => {
  try {
    const word = req.body;
    const { access } = req.headers;
    const { email, score, nickname } = jwt.decode(access);
    await Word.create({ ...word, paticipant: [nickname], search: 0, time: new Date().getTime() });
    await User.updateScoreByEmail(email, score + 1);
    const user = await User.findOneByEmail(email);
    const userInfoWithoutSecret = filterUserInfo(user._doc);
    const accessToken = jwt.sign({ ...userInfoWithoutSecret }, process.env.JWT_SECRET, {
      expiresIn: constants.accessTokenExpiresIn,
    });

    res.send(generateResponse.success({ accessToken }));
  } catch (e) {
    console.log(e);
    if (e.code === 11000) {
      const errMsg = '이미 등록된 신조어입니다.';
      res.send(generateResponse.fail(errMsg));
    } else res.send(generateResponse.fail(e));
  }
});

router.put('/', verifyToken, async (req, res) => {
  try {
    const word = req.body;
    const { title } = word;
    const { access } = req.headers;
    const { email, score, nickname } = jwt.decode(access);
    const { paticipant } = await Word.findOneByTitle(title);
    await Word.updateByTitle(title, {
      ...word,
      paticipant: [nickname, ...paticipant].filter(
        (nickname, index, array) => array.indexOf(nickname) === index,
      ),
    });
    await User.updateScoreByEmail(email, score + 1);
    const user = await User.findOneByEmail(email);
    const userInfoWithoutSecret = filterUserInfo(user._doc);
    const accessToken = jwt.sign({ ...userInfoWithoutSecret }, process.env.JWT_SECRET, {
      expiresIn: constants.accessTokenExpiresIn,
    });

    res.send(generateResponse.success({ accessToken }));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

router.delete('/', verifyToken, async (req, res) => {
  try {
    const { title } = req.query;
    await Word.delete(title);
    res.send(generateResponse.success());
  } catch (e) {
    res.send(generateResponse.fail(e));
  }
});

module.exports = router;
