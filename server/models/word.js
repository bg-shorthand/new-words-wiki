const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    definition: { type: String },
    history: { type: String },
    images: { type: Object },
  },
  {
    versionKey: false,
  },
);

schema.statics.findAll = function () {
  return this.find({});
};
schema.statics.findOne = function (title) {
  return this.findOne({ title });
};
schema.statics.create = async function (payload) {
  const word = new this({ ...payload });
  return word.save();
};
schema.statics.delete = function (title) {
  return this.remove({ title });
};
schema.statics.update = function (title, payload) {
  return this.updateOne({ title }, { ...payload });
};

module.exports = mongoose.model('Word', schema);