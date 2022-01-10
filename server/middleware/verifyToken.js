const User = require('../models/user');
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  const { access, refresh } = req.headers;

  try {
    jwt.verify(access, process.env.JWT_SECRET);
    next();
  } catch (e) {
    if (e.name === 'JsonWebTokenError') {
      res.send({ err: 'invalid token' });
    } else if (e.name === 'TokenExpiredError') {
      jwt.verify(refresh, process.env.JWT_SECRET, (err) => {
        return res.status(500).send({ err: 'need signin' });
      });

      const user = await User.findOneByRefreshToken(refresh);

      const payload = {};
      Object.keys(user._doc)
        .filter((item) => item !== 'password' && item !== 'salt' && item !== 'refreshToken')
        .forEach((key) => (payload[key] = user[key]));

      const newAccess = jwt.sign({ ...payload }, process.env.JWT_SECRET, { expiresIn: '60s' });

      res.send({ newAccess });
    } else {
      res.status(500).send({ err: 'need signin' });
    }
  }
};

module.exports = verifyToken;
