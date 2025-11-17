import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing form data fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      secure: Number(process.env.SMTP_PORT) === 465,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Kontaktanfrage von ${email}`,
      text: `Absender: ${name}\nEmail: ${email}\nNachricht: ${message}`,
    });

    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error: any) {
    res.status(500).json({ error: "Failed to submit form", details: error.message });
  }
}
