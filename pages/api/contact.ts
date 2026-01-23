import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, organization, message, recaptchaToken } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' })
  }

  if (!recaptchaToken) {
    return res.status(400).json({ error: 'reCAPTCHA verification is required' })
  }

  // Verify reCAPTCHA token
  const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY
  if (!RECAPTCHA_SECRET_KEY) {
    console.error('RECAPTCHA_SECRET_KEY environment variable is not configured')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  try {
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    })

    const recaptchaData = await recaptchaResponse.json()

    if (!recaptchaData.success) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed. Please try again.' })
    }

    // NOTE: This API route runs server-side only. process.env variables are NEVER exposed to the client.
    // The BREVO_API_KEY is only accessible on the server and is secure.
    const BREVO_API_KEY = process.env.BREVO_API_KEY
    const BREVO_API_URL = 'https://api.brevo.com/v3/contacts'

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY environment variable is not configured')
      return res.status(500).json({ error: 'Server configuration error' })
    }

    // Create or update contact in Brevo
    const contactResponse = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: name.split(' ')[0] || name,
          LASTNAME: name.split(' ').slice(1).join(' ') || '',
          COMPANY: organization || '',
          MESSAGE: message,
        },
        listIds: [], // Add list IDs if you have them
        updateEnabled: true,
      }),
    })

    if (!contactResponse.ok) {
      const errorData = await contactResponse.text()
      console.error('Brevo contact creation error:', errorData)
      // Continue anyway - might be duplicate contact
    }

    // Send transactional email via Brevo
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
          email: 'admin@openbiocure.ai', // Must be a verified sender in Brevo
        },
        to: [
          {
            email: 'info@openbiocure.ai', // Your email to receive submissions
            name: 'OpenBioCure Team',
          },
        ],
        subject: `Pilot Test Request from ${name}`,
        htmlContent: `
          <h2>New Pilot Test Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        textContent: `
          New Pilot Test Request
          
          Name: ${name}
          Email: ${email}
          Organization: ${organization || 'Not provided'}
          
          Message:
          ${message}
        `,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error('Brevo email error:', errorData)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true, message: 'Thank you! We will contact you soon.' })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
