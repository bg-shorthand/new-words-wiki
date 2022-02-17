const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    email: { type: String },
    authKey: { type: String },
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
schema.statics.create = function (email, authKey) {
  const newAuth = new this({ email, authKey });
  return newAuth.save();
};
schema.statics.deleteByEmail = function (email) {
  return this.deleteOne({ email });
};

module.exports = mongoose.model("EmailAuth", schema);
