import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NOTIFY_EMAIL,
        pass: process.env.NOTIFY_PASS,
      },
    });

    await transporter.verify();
    console.log("Server is ready to take our messages");

    const info = await transporter.sendMail({
      from: `"Orin Waitlist" <${process.env.NOTIFY_EMAIL}>`, // sender address
      to: process.env.MY_PERSONAL_EMAIL, // list of receivers
      subject: "New waitlist signup", // Subject line
      text: `New user signed up: ${email}`, // plain text body
      html: `<p>New waitlist signup:</p><h2>${email}</h2>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return NextResponse.json(
      { ok: true },
      {
        status: 200,
        headers: {
          "Set-Cookie": `waitlisted=true; Path=/; Max-Age=31536000; HttpOnly; Secure; SameSite=Strict`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    return NextResponse.json({ error: "mail failed" }, { status: 500 });
  }
}
