const mongoose = require('mongoose');
const crypto = require('crypto');

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    nickname: { type: String, required: true, unique: true },
    password: { type: String },
    salt: { type: String },
    token: { type: String },
  },
  {
    versionKey: false,
  },
);

schema.statics.findAll = function () {
  return this.find({});
};
schema.statics.findOneByEmail = function (email) {
  return this.findOne({ email });
};
schema.statics.findOneByNickname = function (nickname) {
  return this.findOne({ nickname });
};
schema.statics.create = async function (payload) {
  const salt = crypto.randomBytes(64).toString('base64');
  const { password } = payload;
  const key = await crypto.pbkdf2Sync(password, salt, 104183, 64, 'sha512').toString('base64');
  const newUser = { ...payload, password: key, salt };
  const user = new this(newUser);
  return user.save();
};
schema.statics.deleteByEmail = function (email) {
  return this.remove({ email });
};
schema.statics.updateTokenById = function (id, token) {
  return this.updateOne({ _id: id }, { token });
};

module.exports = mongoose.model('User', schema);
