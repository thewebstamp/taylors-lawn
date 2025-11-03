// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, service, message } = await request.json();

    // Validate required fields
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, and service are required' },
        { status: 400 }
      );
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please call us directly at (870) 530-4289' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL || 'taylorslawncare21@gmail.com',
      subject: `New Quote Request: ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            New Quote Request - Taylor's Lawn Care
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Service Needed:</strong> ${service}</p>
          </div>

          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Project Details</h3>
            <p style="white-space: pre-wrap;">${message || 'No additional details provided.'}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent from your website contact form. Please respond within 2 hours.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Provide specific error messages
    let errorMessage = 'Failed to send email. Please call us directly at (870) 530-4289';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your email configuration.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Cannot connect to email service. Please try again later.';
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}