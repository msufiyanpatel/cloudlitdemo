require("dotenv").config({ path: require("path").join(__dirname, "../.env") });

const express = require("express");
const cors = require("cors");
const { sendMail } = require("./mailservice");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({ origin: ["http://localhost:3000", "https://cloudlit.co", "https://www.cloudlit.co"] }));
app.use(express.json());

// ── Contact form (/contact page) ─────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, service, message, department } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required." });
  }

  const ok = await sendMail({
    Name: `${firstName || ""} ${lastName || ""}`.trim() || "Unknown",
    Email: email,
    Service: service || department || "General Inquiry",
    Message: message,
    Source: `Contact Form (${department || "sales"})`,
  });

  if (ok) return res.json({ success: true });
  return res.status(500).json({ error: "Failed to send email. Please try again." });
});

// ── Newsletter / footer form ──────────────────────────────────────────────────
app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  const ok = await sendMail({
    Name: "Newsletter Subscriber",
    Email: email,
    Message: `New newsletter subscription from: ${email}`,
    Source: "Footer Newsletter Form",
  });

  if (ok) return res.json({ success: true });
  return res.status(500).json({ error: "Failed to process subscription." });
});

// ── Case study forms ──────────────────────────────────────────────────────────
app.post("/api/casestudy", async (req, res) => {
  const { firstName, lastName, email, message, source } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required." });
  }

  const ok = await sendMail({
    Name: `${firstName || ""} ${lastName || ""}`.trim() || "Unknown",
    Email: email,
    Message: message,
    Source: source || "Case Study Form",
  });

  if (ok) return res.json({ success: true });
  return res.status(500).json({ error: "Failed to send email. Please try again." });
});

// ── Health check ──────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`CloudLit mail server running on port ${PORT}`);
});
