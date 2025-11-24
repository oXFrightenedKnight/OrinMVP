import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(req: Request) {
  try {
    const { email } = (await req.json()) as { email: string };

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: process.env.NOTIFY_EMAIL, pass: process.env.NOTIFY_PASS },
    } satisfies SMTPTransport.Options);

    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"Orin Waitlist" <${process.env.NOTIFY_EMAIL}>`,
      to: process.env.MY_PERSONAL_EMAIL,
      subject: "New waitlist signup",
      text: `New user signed up: ${email}`,
      html: `<p>New waitlist signup:</p><h2>${email}</h2>`,
    });

    return NextResponse.json({ ok: true, messageId: info.messageId }, { status: 200 });
  } catch (err) {
    console.error("Waitlist mail failed", err);
    return NextResponse.json({ error: "mail failed" }, { status: 500 });
  }
}
