const filterUserInfo = (user) => {
  const payload = {};

  Object.keys(user)
    .filter((item) => item !== 'password' && item !== 'salt' && item !== 'refreshToken')
    .forEach((key) => (payload[key] = user[key]));

  return payload;
};

module.exports = filterUserInfo;
