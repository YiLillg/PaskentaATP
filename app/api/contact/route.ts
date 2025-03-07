import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

interface ContactFormData {
  name: string;
  email: string;
  phone?: string; // Optional phone number
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return new Response(JSON.stringify({ message: 'Invalid content type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const requestBody = await request.json();
    const { name, email, phone, message }: ContactFormData = requestBody;

    const userEmail = process.env.EMAIL_USER;
    const userPass = process.env.EMAIL_PASS;
    const receiverEmails = [
      process.env.RECEIVER_YL,
      process.env.RECEIVER_ZS,
      process.env.RECEIVER_AB,
      process.env.RECEIVER_PZ,
    ].filter(Boolean) as string[]; // Ensures all values are strings

    if (!userEmail || !userPass || receiverEmails.length === 0) {
      throw new Error('Missing required environment variables');
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    // Include phone in the email if provided
    const phoneInfo = phone ? `Phone: ${phone}\n` : '';

    const mailOptions = {
      from: `"Public Inputs" <${userEmail}>`,
      to: receiverEmails,
      subject: 'New Contact Form Submission',
      text: `You have a new form submission from Paskenta CSAP website:\n\nName: ${name}\nEmail: ${email}\n${phoneInfo}Message: ${message}`,
      // Add HTML version for better formatting
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p>You have a new form submission from Paskenta ATP website:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 100px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
              </td>
            </tr>
            ${
              phone
                ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            `
                : ''
            }
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Message:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      return new Response(
        JSON.stringify({
          message: 'Error sending email',
          error: error.message,
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ message: 'Unexpected error occurred' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
