import nodemailer from 'nodemailer'

// Configure your email service here
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request) {
  try {
    const { name, company, country, product, quantity, packaging, message } = await request.json()

    // Validate required fields
    if (!name || !company || !country || !product || !quantity || !packaging) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Email content
    const mailData = {
      from: process.env.EMAIL_USER,
      to: 'destinygllobal@gmail.com',
      replyTo: 'destinygllobal@gmail.com', // Will be set to user email in future
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Product Requirement:</strong> ${product}</p>
        <p><strong>Quantity Needed:</strong> ${quantity}</p>
        <p><strong>Preferred Packaging:</strong> ${packaging}</p>
        <p><strong>Additional Message:</strong></p>
        <p>${message || 'No additional notes'}</p>
      `,
    }

    // Send email
    // Uncomment when Nodemailer is configured
    // await transporter.sendMail(mailData)

    // For now, just log the data
    console.log('Form submitted:', mailData)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
