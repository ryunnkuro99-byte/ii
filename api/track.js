// Vercel serverless function — receives a visitor ping and forwards to Telegram
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8766631898:AAHnkCEBPPvLo2iWjTh_Fto2a6ijPOoyVZE";
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "-1003982062379";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const page = (body.page || "/").toString().slice(0, 200);
    const ref  = (body.ref  || "direct").toString().slice(0, 200);
    const ua   = (req.headers["user-agent"] || "unknown").toString().slice(0, 300);
    const ip   = (req.headers["x-forwarded-for"] || "").toString().split(",")[0].trim() || "unknown";
    const lang = (req.headers["accept-language"] || "").toString().slice(0, 80);
    const time = new Date().toISOString();

    const text =
      `🟢 <b>New Visitor — Luke Bypass</b>\n` +
      `📄 <b>Page:</b> ${escapeHtml(page)}\n` +
      `🔗 <b>Referrer:</b> ${escapeHtml(ref)}\n` +
      `🌐 <b>IP:</b> ${escapeHtml(ip)}\n` +
      `🗣 <b>Lang:</b> ${escapeHtml(lang)}\n` +
      `🧭 <b>UA:</b> ${escapeHtml(ua)}\n` +
      `⏰ <b>Time:</b> ${escapeHtml(time)}`;

    const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML", disable_web_page_preview: true }),
    });
    const data = await tgRes.json();
    if (!tgRes.ok) return res.status(500).json({ ok: false, error: data });
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false, error: String(err) });
  }
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}