const router = require("express").Router();
const EmailAuth = require("../models/emailAuth");
const { liveTime } = require("../const/const");
const sendMail = require("../sendMail");
const generateAuthKey = require("../module/generateAuthKey");

router.get("/", async (req, res) => {
  try {
    const { email, authKey } = req.query;
    const auth = await EmailAuth.findOneByEmail(email);
    if (auth && authKey === auth.authKey) {
      await EmailAuth.deleteByEmail(email);
      res.send({ auth: true });
    } else res.send({ auth: false });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    let authKey = generateAuthKey();

    const check = await EmailAuth.findOneByEmail(email);
    if (check) {
      await EmailAuth.deleteByEmail(email);
    }

    const auth = await EmailAuth.create(email, authKey);
    res.send({ liveTime });
    sendMail(email, "인증번호", `인증번호: ${authKey}`);

    setTimeout(async () => {
      await EmailAuth.deleteByEmail(email);
    }, liveTime);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
