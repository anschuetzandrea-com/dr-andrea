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
  const data  = await request.formData();
  const email = String(data.get('email') ?? '').trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Bitte eine gültige Email-Adresse eingeben.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  await transporter.sendMail({
    from: '"Dr. Andrea Website" <kontakt@dr-andrea.de>',
    to: import.meta.env.CONTACT_TO,
    subject: 'Neue Newsletter-Anmeldung',
    text: `Neue Anmeldung: ${email}`,
    html: `<p>Neue Newsletter-Anmeldung: <a href="mailto:${email}">${email}</a></p>`,
  });

  await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': import.meta.env.BREVO_API_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email, listIds: [2], updateEnabled: true }),
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
