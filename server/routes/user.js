const router = require('express').Router();
const User = require('../models/user');

router.get();

router.get('/', async (_, res) => {
  try {
    const users = await User.findAll();
    if (!users.length) res.status(404).send({ err: 'User not found' });
    else res.send(users);
  } catch (e) {
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
