const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

// Configuración del transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// POST /api/contacto
router.post('/contacto', async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  // Validación básica
  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({
      ok: false,
      message: 'Todos los campos son obligatorios'
    });
  }

  try {
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Correo:</b> ${correo}</p>
        <p><b>Mensaje:</b><br/>${mensaje}</p>
      `
    });

    res.json({
      ok: true,
      message: 'Mensaje enviado correctamente'
    });

  } catch (error) {
    console.error('Error al enviar correo:', error);
    res.status(500).json({
      ok: false,
      message: 'Error al enviar el mensaje'
    });
  }
});

module.exports = router;
