export default function handler(req, res) {
  res.status(200).json({
    SMTP_USER: process.env.SMTP_USER ? 'SET' : 'MISSING',
    SMTP_PASS: process.env.SMTP_PASS ? 'SET' : 'MISSING',
    MAIL_TO: process.env.MAIL_TO ? 'SET' : 'MISSING',
  });
}
