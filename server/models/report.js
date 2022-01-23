const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
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
schema.statics.deleteByTitle = function (title) {
  return this.deleteOne({ title });
};

module.exports = mongoose.model('Report', schema);
