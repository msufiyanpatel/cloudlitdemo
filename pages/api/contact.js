import { sendMail } from '../../src/lib/mailservice';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { firstName, lastName, email, service, message, department } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' });
  }

  try {
    await sendMail({
      Name: `${firstName || ''} ${lastName || ''}`.trim() || 'Unknown',
      Email: email,
      Service: service || department || 'General Inquiry',
      Message: message,
      Source: `Contact Form (${department || 'sales'})`,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ error: err.message || 'Failed to send email.' });
  }
}
