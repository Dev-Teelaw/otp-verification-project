// utils/mailSender.js
const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
  try {
    // Create a Transporter to send emails
    let transporter = nodemailer.createTransport({
      service:"gmail" ,
      auth: {
        user:"devfest6@gmail.com" ,
        pass:"vsenceqwnmivrpqa",
      }
    });
    // Send emails to users
    let info = await transporter.sendMail({
      from: 'devfest',
      to: email,
      subject: title,
      html: body,
    });
    console.log("Email info: ", info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = mailSender;