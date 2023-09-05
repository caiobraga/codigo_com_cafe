import { NextRequest, NextResponse } from 'next/server';

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    //const body = await req.json();
    const { nome, email, mensagem, funcao } = req.body;

    // Create a Nodemailer transporter using your email service's SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'Gmail', 'Outlook', etc.
      auth: {
        user: 'caiotagb@gmail.com',
        pass: 'qhwmduafhmqxsaze',
      },
    });

    // Email data
    const mailOptions = {
      from: email, // Sender's email address
      to: 'hello@codigocomcafe.dev.br', // Recipient's email address
      subject: funcao, // Assuming you want to set the subject as 'funcao'
      text: mensagem,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Email sending failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
