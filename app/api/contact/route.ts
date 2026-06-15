import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    const {
      fullName,
      companyName,
      email,
      phone,
      country,
      productOfInterest,
      message,
    } = body;

    // Validation
    if (
      !fullName ||
      typeof fullName !== 'string' ||
      fullName.trim().length < 2
    ) {
      return NextResponse.json(
        {
          success: false,
          error: 'Full name must be at least 2 characters long',
        },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide a valid email address',
        },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 5) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide a valid phone number',
        },
        { status: 400 }
      );
    }

    if (!country || typeof country !== 'string') {
      return NextResponse.json(
        {
          success: false,
          error: 'Country is required',
        },
        { status: 400 }
      );
    }

    if (
      !message ||
      typeof message !== 'string' ||
      message.trim().length < 10
    ) {
      return NextResponse.json(
        {
          success: false,
          error: 'Message must be at least 10 characters long',
        },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing in environment variables');

      return NextResponse.json(
        {
          success: false,
          error:
            'Email service is not configured. Please contact support.',
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter
    await transporter.verify();

    // HTML Email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 650px;
              margin: 0 auto;
              padding: 20px;
              background: #f9fafb;
            }

            .header {
              background: linear-gradient(135deg, #059669 0%, #10b981 100%);
              color: white;
              padding: 30px;
              border-radius: 12px 12px 0 0;
              text-align: center;
            }

            .header h1 {
              margin: 0;
              font-size: 24px;
            }

            .content {
              background: #ffffff;
              padding: 30px;
              border: 1px solid #e5e7eb;
              border-top: none;
            }

            .field {
              margin-bottom: 20px;
            }

            .label {
              display: block;
              font-weight: bold;
              color: #059669;
              margin-bottom: 6px;
            }

            .value {
              background: #f9fafb;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              padding: 12px;
            }

            .message-box {
              background: #f9fafb;
              border-left: 4px solid #059669;
              border-radius: 8px;
              padding: 15px;
              white-space: pre-wrap;
              word-wrap: break-word;
            }

            .timestamp {
              margin-top: 25px;
              color: #6b7280;
              font-size: 14px;
            }

            .footer {
              background: #1f2937;
              color: #d1d5db;
              padding: 20px;
              text-align: center;
              border-radius: 0 0 12px 12px;
              font-size: 13px;
            }
          </style>
        </head>

        <body>
          <div class="header">
            <h1>🌍 New Inquiry Received</h1>
            <p style="margin-top: 8px;">
              Global Sea Links Website Contact Form
            </p>
          </div>

          <div class="content">
            <div class="field">
              <span class="label">👤 Full Name</span>
              <div class="value">${fullName.trim()}</div>
            </div>

            <div class="field">
              <span class="label">🏢 Company Name</span>
              <div class="value">
                ${companyName?.trim() || 'N/A'}
              </div>
            </div>

            <div class="field">
              <span class="label">📧 Email Address</span>
              <div class="value">${email.trim()}</div>
            </div>

            <div class="field">
              <span class="label">📞 Phone Number</span>
              <div class="value">${phone.trim()}</div>
            </div>

            <div class="field">
              <span class="label">🌍 Country</span>
              <div class="value">${country.trim()}</div>
            </div>

            <div class="field">
              <span class="label">📦 Product of Interest</span>
              <div class="value">
                ${productOfInterest?.trim() || 'Not Specified'}
              </div>
            </div>

            <div class="field">
              <span class="label">💬 Message</span>
              <div class="message-box">
                ${message.trim()}
              </div>
            </div>

            <div class="timestamp">
              📅 Received:
              ${new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short',
              })}
            </div>
          </div>

          <div class="footer">
            <p>
              This email was sent from the Global Sea Links website inquiry form.
            </p>
            <p>
              Reply directly to this email to contact
              ${fullName.trim()}.
            </p>
          </div>
        </body>
      </html>
    `;

    // Plain text fallback
    const textContent = `
New Inquiry - Global Sea Links

Full Name: ${fullName.trim()}
Company Name: ${companyName?.trim() || 'N/A'}
Email: ${email.trim()}
Phone: ${phone.trim()}
Country: ${country.trim()}
Product of Interest: ${
      productOfInterest?.trim() || 'Not Specified'
    }

Message:
${message.trim()}

----------------------------------
Received: ${new Date().toLocaleString()}
This email was sent from the Global Sea Links website.
`;

    // Mail options
    const mailOptions = {
      from: `"Global Sea Links Inquiry Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email.trim(),
      subject: `New Inquiry from ${fullName.trim()}`,
      text: textContent,
      html: htmlContent,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      {
        success: true,
        message:
          'Your inquiry has been sent successfully! We will get back to you soon.',
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          {
            success: false,
            error:
              'Email authentication failed. Please contact support.',
          },
          { status: 500 }
        );
      }

      if (
        error.message.includes('ECONNECTION') ||
        error.message.includes('ETIMEDOUT')
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              'Unable to connect to the email server. Please try again later.',
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      {
        success: false,
        error:
          'Failed to send your inquiry. Please try again or contact us directly.',
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      error: 'Method not allowed. Use POST to submit the inquiry form.',
    },
    { status: 405 }
  );
}