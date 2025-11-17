export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

interface FormData {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json({ error: "Missing form data fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      secure: Number(process.env.SMTP_PORT) === 465,
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Kontaktanfrage von ${formData.email}`,
      text: `Absender: ${formData.name}\nEmail: ${formData.email}\nNachricht: ${formData.message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Form submitted successfully!" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { error: "Failed to submit form", details: message },
      { status: 500 }
    );
  }
}
