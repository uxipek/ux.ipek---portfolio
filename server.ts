import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;
    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Brevo API key is not configured on the server." });
    }

    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "api-key": apiKey
        },
        body: JSON.stringify({
          sender: { name: "UX.IPEK Contact Form", email: "ipekbolakca@gmail.com" },
          replyTo: { name: name, email: email },
          to: [{ email: "ipekbolakca@gmail.com", name: "Ipek Bolakca" }],
          subject: `New Contact Form Submission: ${subject}`,
          htmlContent: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
          `
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Brevo API Error:", errorData);
        return res.status(response.status).json({ error: "Failed to send email." });
      }

      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
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
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
