const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Send an enquiry email to admin@cloudlit.co
 * @param {object} params
 * @param {string} params.Name
 * @param {string} params.Email
 * @param {string} params.PhoneNumber
 * @param {string} params.Company
 * @param {string} params.Service
 * @param {string} params.Message
 * @param {string} params.Source - which form sent this
 */
async function sendMail({ Name, Email, PhoneNumber = "N/A", Company = "N/A", Service = "N/A", Message, Source = "Website" }) {
  const subject = `New Enquiry from ${Name} — ${Service}`;

  const text = `
New enquiry received via ${Source}

Name:    ${Name}
Email:   ${Email}
Phone:   ${PhoneNumber}
Company: ${Company}
Service: ${Service}

Message:
${Message}

---
Sent from cloudlit.co
  `.trim();

  const mailOptions = {
    from: `"CloudLit Website" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO || "admin@cloudlit.co",
    replyTo: Email,
    subject,
    text,
  };

  return transporter
    .sendMail(mailOptions)
    .then((info) => {
      if (process.env.NODE_ENV !== "production") {
        console.log("Email sent:", info.response);
      }
      return true;
    })
    .catch((err) => {
      if (process.env.NODE_ENV !== "production") {
        console.error("Error sending mail:", err);
      }
      return false;
    });
}

module.exports = { sendMail };
