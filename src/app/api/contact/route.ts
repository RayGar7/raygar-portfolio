import { NextResponse } from "next/server";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const msg = {
      to: "rgarcia.7770@gmail.com",
      from: "ray@raygardev.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<strong>New Contact Form Submission</strong><br><br>
             <strong>Name:</strong> ${name}<br>
             <strong>Email:</strong> ${email}<br>
             <strong>Phone:</strong> ${phone}<br>
             <strong>Message:</strong> ${message}`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
