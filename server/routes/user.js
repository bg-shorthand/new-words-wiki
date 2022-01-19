const router = require('express').Router();
const User = require('../models/user');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verifyToken');
const constants = require('../const/const');
const generateResponse = require('../module/generateResponse');
const filterUserInfo = require('../module/filterUserInfo');

router.get('/signin', async (req, res) => {
  try {
    const { email, password } = req.query;

    const user = await User.findOneByEmail(email);
    if (!user) return res.send(generateResponse.fail('가입되지 않은 이메일입니다.'));

    const key = await crypto
      .pbkdf2Sync(password, user.salt, constants.cryptoRepeat, 64, 'sha512')
      .toString('base64');
    if (key !== user.password) return res.send(generateResponse.fail('비밀번호가 다릅니다.'));

    const payload = filterUserInfo(user._doc);

    const accessToken = jwt.sign({ ...payload }, process.env.JWT_SECRET, {
      expiresIn: constants.accessTokenExpiresIn,
    });
    const refreshToken = jwt.sign({}, process.env.JWT_SECRET);

    await User.updateTokenById(user._id, refreshToken);

    res.send(generateResponse.success({ accessToken, refreshToken }));
  } catch (e) {
    res.send(generateResponse.fail(e));
  }
});

router.get('/email/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOneByEmail(email);
    const payload = filterUserInfo(user._doc);
    if (!user) return res.send(generateResponse.fail('등록되지 않은 이메일니다.'));
    else res.send(generateResponse.success({ ...payload }));
  } catch (e) {
    res.send(generateResponse.fail(e));
  }
});

router.get('/nickname/:nickname', async (req, res) => {
  try {
    const nickname = req.params.nickname;
    const user = await User.findOneByNickname(nickname);
    if (!user) return res.send(generateResponse.fail('등록되지 않은 닉네임입니다.'));
    else res.send(generateResponse.success({ isUser: true }));
  } catch (e) {
    res.send(generateResponse.fail(e));
  }
});

router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    await User.create(newUser);
    res.send(generateResponse.success({ success: true }));
  } catch (e) {
    if (e.code === 11000) {
      const key = Object.keys(e.keyValue)[0];
      const errMsg = key === 'email' ? '이미 등록된 이메일입니다.' : '이미 등록된 닉네임입니다';
      res.send(generateResponse.fail(errMsg));
    } else res.send(generateResponse.fail(e));
  }
});

router.put('/updatePassword', async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const user = await User.findOneByEmail(email);
    const key = await crypto
      .pbkdf2Sync(newPassword, user.salt, constants.cryptoRepeat, 64, 'sha512')
      .toString('base64');

    await User.updatePassword(email, key);
    res.send(generateResponse.success());
  } catch (e) {
    res.send(generateResponse.fail('비밀번호를 변경하지 못 했습니다.'));
  }
});

module.exports = router;
