const User = require('../models/user');
const jwt = require('jsonwebtoken');
const constants = require('../const/const');
const generateResponse = require('../module/generateResponse');

const verifyToken = async (req, res, next) => {
  const { access, refresh } = req.headers;

  try {
    jwt.verify(access, process.env.JWT_SECRET);
    next();
  } catch (e) {
    if (e.name === 'JsonWebTokenError') {
      res.send(generateResponse.fail('로그인이 필요합니다.'));
    } else if (e.name === 'TokenExpiredError') {
      jwt.verify(refresh, process.env.JWT_SECRET);

      const user = await User.findOneByRefreshToken(refresh);

      const payload = {};
      Object.keys(user._doc)
        .filter((item) => item !== 'password' && item !== 'salt' && item !== 'refreshToken')
        .forEach((key) => (payload[key] = user[key]));

      const newAccess = jwt.sign({ ...payload }, process.env.JWT_SECRET, {
        expiresIn: constants.accessTokenExpiresIn,
      });

      res.send(generateResponse.fail('', newAccess));
    } else {
      res.send(generateResponse.fail('로그인이 필요합니다.'));
    }
  }
};

module.exports = verifyToken;
