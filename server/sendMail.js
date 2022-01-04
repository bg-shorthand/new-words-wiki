const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const { USER, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;

async function sendMail(receiverEmail, subject, content) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.google.com",
    port: 587,
    secure: true,
    auth: {
      type: "OAuth2",
      user: USER,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
    },
  });

  const message = {
    from: USER,
    to: receiverEmail,
    subject,
    html: content,
  };

  try {
    await transporter.sendMail(message);
    console.log("Send mail");
  } catch (e) {
    console.log(e);
  }
}

module.exports = sendMail;
