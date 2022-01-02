const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    nickname: { type: String, required: true, unique: true },
  },
  {
    versionKey: false,
  }
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
schema.statics.create = function (payload) {
  const user = new this(payload);
  return user.save();
};
schema.statics.deleteByEmail = function (email) {
  return this.remove({ email });
};

module.exports = mongoose.model("User", schema);
