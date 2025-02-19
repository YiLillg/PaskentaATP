import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface ContactFormData {
  name: string;
  email: string;
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
    const { name, email, message }: ContactFormData = requestBody;

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

    const mailOptions = {
      from: `"Public Inputs" <${userEmail}>`,
      to: receiverEmails,
      subject: 'New Contact Form Submission',
      text: `You have a new form submission from Paskenta ATP website:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);

    return new Response(
      JSON.stringify({ message: 'Error sending email', error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
