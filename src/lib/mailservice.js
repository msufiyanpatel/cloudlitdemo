import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 587,
  secure: false,
  requireTLS: true,
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

  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent:", info.response);
  return true;
}

export { sendMail };
