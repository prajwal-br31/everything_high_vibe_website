const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');

// Bring in Models & Helpers
const Contact = require('../../models/contact');

router.post('/add', async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    if (!email) {
      return res
        .status(400)
        .json({ error: 'You must enter an email address.' });
    }

    if (!name) {
      return res
        .status(400)
        .json({ error: 'You must enter description & name.' });
    }

    if (!message) {
      return res.status(400).json({ error: 'You must enter a message.' });
    }

    const existingContact = await Contact.findOne({ email });

    if (existingContact) {
      return res
        .status(400)
        .json({ error: 'A request already existed for same email address' });
    }

    const contact = new Contact({
      name,
      email,
      message
    });

    const contactDoc = await contact.save();

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
      }
    });

    var mailOptions = {
      from: process.env.GMAIL_USERNAME,
      to: email,
      subject: 'Contact Us',
      text: `We received your message! Our team will contact you soon. \n\n`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(200).json({
      success: true,
      message: `We received your message, we will reach you on your email address ${email}!`,
      contact: contactDoc
    });
  } catch (error) {
    return res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

module.exports = router;
