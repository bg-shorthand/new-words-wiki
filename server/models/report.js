const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: { type: String },
    reason: { type: String },
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

module.exports = mongoose.model('Report', schema);
