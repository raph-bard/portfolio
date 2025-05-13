import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "L'adresse email est invalide." },
        { status: 400 }
      );
    }

    const formattedReplyTo = `${name.trim()} <${email.trim()}>`;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'raphael.bard.pro@gmail.com',
      subject: `Nouveau message de ${name}`,
      replyTo: formattedReplyTo,
      text: `
        Nom : ${name}
        Email : ${email}
        Message : ${message}
      `.trim(),
    });

    if (data.error) {
      return NextResponse.json(
        { success: false, error: data.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Erreur serveur :", error);
    return NextResponse.json(
      { success: false, error: "Une erreur serveur est survenue." },
      { status: 500 }
    );
  }
}
