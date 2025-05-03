import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: 'Nuevo mensaje del formulario',
      text: `De: ${name} <${email}>\n\nMensaje:\n${message}`,
      replyTo: email
    });

    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
