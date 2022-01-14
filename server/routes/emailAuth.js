const router = require('express').Router();
const EmailAuth = require('../models/emailAuth');
const { liveTime } = require('../const/const');
const sendMail = require('../sendMail');
const generateAuthKey = require('../module/generateAuthKey');
const generateResponse = require('../module/generateResponse');

router.get('/', async (req, res) => {
  try {
    const { email, authKey } = req.query;
    const auth = await EmailAuth.findOneByEmail(email);
    if (auth && authKey === auth.authKey) {
      await EmailAuth.deleteByEmail(email);
      res.send(generateResponse.success('인증에 성공하였습니다.'));
    } else res.send(generateResponse.fail('인증 번호가 다릅니다.'));
  } catch (e) {
    res.send(generateResponse.fail(e));
  }
});

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    let authKey = generateAuthKey();

    const check = await EmailAuth.findOneByEmail(email);
    if (check) {
      await EmailAuth.deleteByEmail(email);
    }

    const auth = await EmailAuth.create(email, authKey);
    res.send(generateResponse.success({ liveTime }));
    sendMail(email, '인증번호', `인증번호: ${authKey}`);

    setTimeout(async () => {
      await EmailAuth.deleteByEmail(email);
    }, liveTime);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
