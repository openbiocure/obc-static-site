import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY environment variable is not configured')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  try {
    // OpenBioCure branded email template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'IBM Plex Sans', 'Inter', Arial, sans-serif; background-color: #fafafa;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fafafa; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2fa4a9 0%, #41d0d6 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                OpenBioCure<sup style="font-size: 20px;">™</sup>
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #212121; font-size: 24px; font-weight: 700;">
                You're on the Waitlist! 🎉
              </h2>
              
              <p style="margin: 0 0 20px 0; color: #616161; font-size: 16px; line-height: 24px;">
                Congratulations! Your application has been accepted and you've been added to the OpenBioCure waitlist.
              </p>
              
              <p style="margin: 0 0 20px 0; color: #616161; font-size: 16px; line-height: 24px;">
                When we launch our AI-powered biomedical research platform, you'll be among the first to access:
              </p>
              
              <ul style="margin: 0 0 30px 0; padding-left: 20px; color: #616161; font-size: 16px; line-height: 28px;">
                <li>Query 200M+ peer-reviewed papers instantly</li>
                <li>Get evidence-backed answers with full traceability</li>
                <li>Access inline citations linked directly to source materials</li>
                <li>Use our Research Editor for AI-assisted drafting</li>
              </ul>
              
              <div style="background-color: #f5f5f5; border-left: 4px solid #2fa4a9; padding: 20px; margin: 30px 0; border-radius: 4px;">
                <p style="margin: 0; color: #212121; font-size: 16px; font-weight: 600;">
                  What's Next:
                </p>
                <p style="margin: 10px 0 0 0; color: #616161; font-size: 14px; line-height: 20px;">
                  We'll notify you as soon as the platform is ready for early access. Stay tuned for updates!
                </p>
              </div>
              
              <p style="margin: 30px 0 20px 0; color: #616161; font-size: 16px; line-height: 24px;">
                We're excited to have you join us in accelerating biomedical research and innovation. If you have any questions, feel free to reach out to us at <a href="mailto:info@openbiocure.ai" style="color: #2fa4a9; text-decoration: none;">info@openbiocure.ai</a>.
              </p>
              
              <p style="margin: 0; color: #616161; font-size: 16px; line-height: 24px;">
                Best regards,<br>
                <strong style="color: #212121;">The OpenBioCure Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f5f5; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 10px 0; color: #757575; font-size: 12px; line-height: 16px;">
                © 2026 OpenBioCure™. All rights reserved.
              </p>
              <p style="margin: 0; color: #757575; font-size: 12px; line-height: 16px;">
                <a href="https://openbiocure.ai" style="color: #2fa4a9; text-decoration: none;">openbiocure.ai</a> | 
                <a href="mailto:info@openbiocure.ai" style="color: #2fa4a9; text-decoration: none;">info@openbiocure.ai</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `

    const textContent = `
OpenBioCure™

You're on the Waitlist! 🎉

Congratulations! Your application has been accepted and you've been added to the OpenBioCure waitlist.

When we launch our AI-powered biomedical research platform, you'll be among the first to access:
• Query 200M+ peer-reviewed papers instantly
• Get evidence-backed answers with full traceability
• Access inline citations linked directly to source materials
• Use our Research Editor for AI-assisted drafting

What's Next:
We'll notify you as soon as the platform is ready for early access. Stay tuned for updates!

We're excited to have you join us in accelerating biomedical research and innovation. If you have any questions, feel free to reach out to us at info@openbiocure.ai.

Best regards,
The OpenBioCure Team

---
© 2026 OpenBioCure™. All rights reserved.
openbiocure.ai | info@openbiocure.ai
    `

    // Send email via Brevo
    const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'OpenBioCure',
          email: 'admin@openbiocure.ai',
        },
        to: [
          {
            email: email,
          },
        ],
        subject: 'You\'re on the OpenBioCure Waitlist! 🎉',
        htmlContent: htmlContent,
        textContent: textContent,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error('Brevo email error:', errorData)
      return res.status(500).json({ error: 'Failed to send email', details: errorData })
    }

    return res.status(200).json({ success: true, message: 'Acceptance email sent successfully' })
  } catch (error) {
    console.error('Send acceptance email error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
