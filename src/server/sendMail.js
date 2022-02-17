const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const { EMAIL, PASS } = process.env;

async function sendMail(receiverEmail, subject, content) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.google.com',
    port: 587,
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  });

  const message = {
    from: { name: '신조어 위키', address: EMAIL },
    to: receiverEmail,
    subject,
    html: content,
  };

  try {
    await transporter.sendMail(message);
    console.log('Send mail');
  } catch (e) {
    console.log(e);
  }
}

module.exports = sendMail;
