import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user,
        pass: pass
      }
    });

    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: user,
      subject: `Portfolio : Nouveau message de ${name}`,
      text: message
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: 'Email envoyé avec succès'
      }),
      {
        status: 200
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Erreur lors de l'envoi de mail." }),
      { status: 500 }
    );
  }  
}
