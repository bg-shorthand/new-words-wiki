const router = require('express').Router();
const Report = require('../models/report');
const generateResponse = require('../module/generateResponse');
const verifyToken = require('../middleware/verifyToken');

router.get('/', async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.send(generateResponse.success(reports));
  } catch (e) {
    res.send(generateResponse.fail(e));
  }
});

router.post('/', verifyToken, async (req, res) => {
  try {
    const report = req.body;
    const newReport = await Report.create(report);
    res.send(generateResponse.success(newReport));
  } catch (e) {
    console.log(e);
    if (e.code === 11000) res.send(generateResponse.success());
    else res.send(generateResponse.fail(e));
  }
});

router.delete('/', verifyToken, async (req, res) => {
  try {
    const { title } = req.query;
    const data = await Report.deleteByTitle(title);
    res.send(generateResponse.success(data));
  } catch (e) {
    console.log(e);
    res.send(generateResponse.fail(e));
  }
});

module.exports = router;
