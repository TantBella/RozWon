require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://rozwonhealth.com",
  })
);
app.use(express.json());
app.set("trust proxy", 1);

const emailLimiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 5,
  message: "Too many requests, please try again after 30 minutes.",
});

app.get("/", (req, res) => {
  res.send("Email API is running!");
});

const fetch = require("node-fetch");

app.post("/api/send-mail", emailLimiter, async (req, res) => {
  const { name, email, message, captchaResponse } = req.body;

  if (!name || !email || !message || !captchaResponse) {
    return res.status(400).json({ error: "All fields and reCAPTCHA required" });
  }

  try {

    const verifyResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET}&response=${captchaResponse}`,
      }
    );
    const data = await verifyResponse.json();
    console.log("reCAPTCHA result:", data);

    if (!data.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.strato.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.status(200).json({ success: "Email sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
