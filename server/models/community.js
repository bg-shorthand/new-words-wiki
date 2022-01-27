const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    time: { type: Number, required: true },
    author: { type: String, required: true },
    score: { type: Number },
    number: { type: Number },
    comment: { type: Array },
  },
  {
    versionKey: false,
  },
);

schema.statics.findAll = function () {
  return this.find({});
};
schema.statics.create = async function (payload) {
  const report = new this(payload);
  return report.save();
};
schema.statics.deleteById = function (id) {
  return this.deleteOne({ _id: id });
};

module.exports = mongoose.model('Community', schema);
