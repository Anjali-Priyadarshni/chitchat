const nodemailer = require("nodemailer");

async function sendEmail(toEmail, username,token) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "chitchatapplication23@gmail.com",
      pass: "mvcjqzheujsqwzlr"
    }
  });

  const mailOptions = {
    from: "chitchatapplication23@gmail.com",
    to: toEmail,
    subject: "Registration Successful",
    html: `
      <h2>Welcome ${username}!</h2>
      <p>You have successfully registered.</p>
      <p>click on below link and actvate your account</p>
      http://localhost:3000/token?token=${token}&&email=${toEmail}
      <p>Please Activate your account with generated token : <b>${token}</b>  </p>
    `
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;

