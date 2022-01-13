const router = require('express').Router();
const User = require('../models/user');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verifyToken');
const constants = require('../const/const');

router.get('/myInfo', verifyToken, async (req, res) => {
  const email = jwt.decode(req.headers.access).email;
  const user = await User.findOneByEmail(email);
  const payload = {};
  Object.keys(user._doc)
    .filter((item) => item !== 'password' && item !== 'salt' && item !== 'refreshToken')
    .forEach((key) => (payload[key] = user[key]));
  res.send({ ...payload });
});

router.get('/signin', async (req, res) => {
  try {
    const { email, password } = req.query;

    const user = await User.findOneByEmail(email);
    if (!user) return res.send({ msg: '가입되지 않은 이메일입니다.' });

    const key = await crypto
      .pbkdf2Sync(password, user.salt, constants.cryptoRepeat, 64, 'sha512')
      .toString('base64');
    if (key !== user.password) return res.send({ msg: '비밀번호가 다릅니다' });

    const payload = {};
    Object.keys(user._doc)
      .filter((item) => item !== 'password' && item !== 'salt' && item !== 'refreshToken')
      .forEach((key) => (payload[key] = user[key]));

    const accessToken = jwt.sign({ ...payload }, process.env.JWT_SECRET, {
      expiresIn: constants.accessTokenExpiresIn,
    });
    const refreshToken = jwt.sign({}, process.env.JWT_SECRET);

    await User.updateTokenById(user._id, refreshToken);

    res.send({ accessToken, refreshToken });
  } catch (e) {
    console.log('err', e);
    res.status(500).send(e);
  }
});

router.get('/email/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOneByEmail(email);
    if (!user) return res.send({ isUser: false });
    else res.send({ isUser: true });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/nickname/:nickname', async (req, res) => {
  try {
    const nickname = req.params.nickname;
    const user = await User.findOneByNickname(nickname);
    if (!user) return res.send({ isUser: false });
    else res.send({ isUser: true });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    await User.create(newUser);
    const user = await User.findOneByEmail(newUser.email);
    if (user) res.send({ success: true });
    else res.send({ success: false });
  } catch (e) {
    if (e.code === 11000) {
      const key = Object.keys(e.keyValue)[0];
      const value = Object.values(e.keyValue)[0];
      const msg = key === 'email' ? '이미 등록된 이메일입니다.' : '이미 등록된 닉네임입니다';
      res.send({ key, value, msg });
    } else res.status(500).send(e);
  }
});

module.exports = router;
