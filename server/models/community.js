const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    time: { type: Number, required: true },
    author: { type: String, required: true },
    score: { type: Number },
    number: { type: Number },
    comments: { type: Array },
  },
  {
    versionKey: false,
  },
);

schema.statics.findAll = function () {
  return this.find({});
};
schema.statics.findPostById = function (id) {
  return this.findOne({ _id: id });
};
schema.statics.create = async function (payload) {
  const report = new this(payload);
  return report.save();
};
schema.statics.deleteById = function (id) {
  return this.deleteOne({ _id: id });
};
schema.statics.updateById = function (id, payload) {
  return this.updateOne({ _id: id }, { ...payload });
};
schema.statics.updatePostById = function (id, comments) {
  return this.updateOne({ _id: id }, { comments });
};

module.exports = mongoose.model('Community', schema);
