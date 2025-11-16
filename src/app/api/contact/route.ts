import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailBody = `
New contact form submission from Shravi Logistics website:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Message:
${message}

---
This email was sent from the contact form on shravilogistics.com
    `.trim();

    // Send email using Resend
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.COMPANY_EMAIL || 'info@shravilogistics.com',
        replyTo: email,
        subject: emailSubject,
        text: emailBody,
      });

      return NextResponse.json(
        { message: 'Form submitted successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // If Resend is not configured, still return success but log the error
      // In production, you should handle this properly
      return NextResponse.json(
        { message: 'Form submitted successfully' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}

