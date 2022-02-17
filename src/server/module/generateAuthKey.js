const generateAuthKey = () => {
  let key = "";
  for (let i = 0; i < 6; i++) {
    key += Math.floor(Math.random() * 10) + "";
  }
  return key;
};

module.exports = generateAuthKey;
