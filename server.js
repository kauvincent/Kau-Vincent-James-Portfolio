import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Ensure JSON payload is parsed
  app.use(express.json());

  // API endpoints FIRST
  app.post("/api/contact", async (req, res) => {
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
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
