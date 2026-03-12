import { sendMail } from '../../src/lib/mailservice';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const ok = await sendMail({
    Name: 'Newsletter Subscriber',
    Email: email,
    Message: `New newsletter subscription from: ${email}`,
    Source: 'Footer Newsletter Form',
  });

  if (ok) return res.status(200).json({ success: true });
  return res.status(500).json({ error: 'Failed to process subscription.' });
}
