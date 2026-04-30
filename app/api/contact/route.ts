import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Name must be at least 2 characters long' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing in environment variables');
      return NextResponse.json(
        { success: false, error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Create nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email content - HTML formatted
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #059669 0%, #10b981 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              background: #f9fafb;
              padding: 30px;
              border: 1px solid #e5e7eb;
              border-top: none;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #059669;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              background: white;
              padding: 12px;
              border-radius: 6px;
              border: 1px solid #e5e7eb;
            }
            .message-box {
              background: white;
              padding: 15px;
              border-radius: 6px;
              border-left: 4px solid #059669;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              background: #1f2937;
              color: #9ca3af;
              padding: 20px;
              text-align: center;
              border-radius: 0 0 10px 10px;
              font-size: 12px;
            }
            .timestamp {
              color: #6b7280;
              font-size: 14px;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🌍 New Contact Form Submission</h1>
            <p style="margin: 5px 0 0 0;">Global Sea Links Website</p>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">👤 Name:</span>
              <div class="value">${name.trim()}</div>
            </div>
            
            <div class="field">
              <span class="label">📧 Email:</span>
              <div class="value">${email.trim()}</div>
            </div>
            
            <div class="field">
              <span class="label">💬 Message:</span>
              <div class="message-box">${message.trim()}</div>
            </div>
            
            <div class="timestamp">
              📅 Received: ${new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent from the contact form on Global Sea Links website.</p>
            <p>Reply directly to this email to respond to ${name.trim()}.</p>
          </div>
        </body>
      </html>
    `;

    // Plain text version (fallback)
    const textContent = `
New Contact Form Submission - Global Sea Links

Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}

---
Received: ${new Date().toLocaleString()}
This email was sent from the contact form on Global Sea Links website.
    `;

    // Email options
    const mailOptions = {
      from: `"Global Sea Links Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email.trim(),
      subject: `New Contact Form Submission from ${name.trim()}`,
      text: textContent,
      html: htmlContent,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.',
        messageId: info.messageId,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);

    // Handle specific nodemailer errors
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { success: false, error: 'Email authentication failed. Please contact support.' },
          { status: 500 }
        );
      }
      
      if (error.message.includes('ECONNECTION') || error.message.includes('ETIMEDOUT')) {
        return NextResponse.json(
          { success: false, error: 'Unable to connect to email server. Please try again later.' },
          { status: 500 }
        );
      }
    }

    // Generic error response
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit contact form.' },
    { status: 405 }
  );
}
