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

    // Email content with professional template
    const mailData = {
      from: process.env.EMAIL_USER,
      to: 'raghavsobti37@gmail.com',
      replyTo: name, // User's name as reply identifier
      subject: `New Product Inquiry from ${company} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Product Inquiry</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #2C2C2C;
              background-color: #F5F5F5;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #0f75bc 0%, #0d5a99 100%);
              color: #ffffff;
              padding: 30px 20px;
              text-align: center;
              border-bottom: 4px solid #fcb040;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 700;
              letter-spacing: 0.5px;
            }
            .header p {
              margin: 10px 0 0 0;
              font-size: 14px;
              opacity: 0.95;
            }
            .content {
              padding: 30px 20px;
            }
            .inquiry-section {
              margin-bottom: 25px;
            }
            .inquiry-section h2 {
              color: #0f75bc;
              font-size: 16px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin: 0 0 15px 0;
              padding-bottom: 8px;
              border-bottom: 2px solid #fcb040;
            }
            .field-group {
              margin-bottom: 15px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
            }
            .field-group.full {
              grid-template-columns: 1fr;
            }
            .field {
              background-color: #F5F5F5;
              padding: 12px;
              border-radius: 4px;
              border-left: 3px solid #fcb040;
            }
            .field-label {
              color: #0f75bc;
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.3px;
              margin-bottom: 5px;
            }
            .field-value {
              color: #2C2C2C;
              font-size: 14px;
              word-break: break-word;
            }
            .message-box {
              background-color: #ffffff;
              border: 1px solid #D0D0D0;
              padding: 15px;
              border-radius: 4px;
              border-left: 4px solid #0f75bc;
            }
            .message-label {
              color: #0f75bc;
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.3px;
              margin-bottom: 8px;
              display: block;
            }
            .message-content {
              color: #2C2C2C;
              font-size: 14px;
              line-height: 1.6;
              white-space: pre-wrap;
              word-break: break-word;
            }
            .footer {
              background-color: #F5F5F5;
              padding: 20px;
              border-top: 1px solid #D0D0D0;
              text-align: center;
              font-size: 12px;
              color: #666;
            }
            .footer-highlight {
              color: #0f75bc;
              font-weight: 700;
            }
            @media only screen and (max-width: 600px) {
              .field-group {
                grid-template-columns: 1fr;
              }
              .container {
                margin: 10px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📥 NEW PRODUCT INQUIRY</h1>
              <p>Destiny Global - Customer Inquiry Form Submission</p>
            </div>
            
            <div class="content">
              <!-- Contact Information Section -->
              <div class="inquiry-section">
                <h2>👤 Contact Information</h2>
                <div class="field-group">
                  <div class="field">
                    <div class="field-label">Full Name</div>
                    <div class="field-value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Company</div>
                    <div class="field-value">${company}</div>
                  </div>
                </div>
                <div class="field-group full">
                  <div class="field">
                    <div class="field-label">Country</div>
                    <div class="field-value">${country}</div>
                  </div>
                </div>
              </div>
              
              <!-- Product Requirements Section -->
              <div class="inquiry-section">
                <h2>📦 Product Requirements</h2>
                <div class="field-group">
                  <div class="field">
                    <div class="field-label">Product Requirement</div>
                    <div class="field-value">${product}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Quantity Needed</div>
                    <div class="field-value">${quantity}</div>
                  </div>
                </div>
                <div class="field-group full">
                  <div class="field">
                    <div class="field-label">Preferred Packaging</div>
                    <div class="field-value">${packaging}</div>
                  </div>
                </div>
              </div>
              
              <!-- Additional Message Section -->
              <div class="inquiry-section">
                <h2>💬 Additional Information</h2>
                <div class="message-box">
                  <span class="message-label">Customer Notes</span>
                  <div class="message-content">${message || 'No additional notes provided'}</div>
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p>This inquiry was submitted via the Destiny Global website.</p>
              <p style="margin: 10px 0 0 0; border-top: 1px solid #D0D0D0; padding-top: 10px;">
                <span class="footer-highlight">Respond Time:</span> Please reply within 48 business hours
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Send email via Nodemailer
    await transporter.sendMail(mailData)
    
    console.log('Email sent successfully to:', mailData.to)

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
