import { Resend } from 'resend';

export default async function contactController(req, res) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.warn("RESEND_API_KEY or CONTACT_EMAIL not configured.");
      return res.status(500).json({ error: "Email service is not configured on the server." });
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: contactEmail,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    if (data.error) {
      console.error("Resend error:", data.error);
      return res.status(500).json({ error: "Failed to send message via email." });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}
