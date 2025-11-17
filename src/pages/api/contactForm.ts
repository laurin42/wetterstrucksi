import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, message } = req.body;

  if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });

  try {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, EMAIL_FROM, EMAIL_TO } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !EMAIL_FROM || !EMAIL_TO) {
      console.error("Env variables missing");
      return res.status(500).json({ error: "SMTP env variables not set" });
    }

    console.log("Sending mail from", email);

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
      secure: Number(SMTP_PORT) === 465,
    });

    await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Kontaktanfrage von ${email}`,
      text: `Absender: ${name}\nEmail: ${email}\nNachricht: ${message}`,
    });

    console.log("Mail sent successfully");

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (err: any) {
    console.error("Mail sending failed:", err);
    return res.status(500).json({ error: "Failed to submit form", details: err.message });
  }
}
