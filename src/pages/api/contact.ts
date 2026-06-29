import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: import.meta.env.BREVO_SMTP_HOST,
  port: Number(import.meta.env.BREVO_SMTP_PORT),
  secure: false,
  auth: {
    user: import.meta.env.BREVO_SMTP_USER,
    pass: import.meta.env.BREVO_SMTP_PASS,
  },
});

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name    = String(data.get('name')    ?? '').trim();
  const email   = String(data.get('email')   ?? '').trim();
  const message = String(data.get('message') ?? '').trim();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Bitte alle Felder ausfüllen.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  await transporter.sendMail({
    from: `"Dr. Andrea Website" <${import.meta.env.BREVO_SMTP_USER}>`,
    to: import.meta.env.CONTACT_TO,
    replyTo: email,
    subject: `Neue Kontaktanfrage von ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><hr/><p>${message.replace(/\n/g, '<br>')}</p>`,
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
