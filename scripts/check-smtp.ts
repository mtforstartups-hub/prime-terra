import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

/**
 * Prebuild SMTP Connection Verification Script
 *
 * Verifies SMTP server reachability, TLS configuration, and authentication credentials
 * using Nodemailer before running project build or deployment.
 *
 * Usage:
 *   bun run scripts/check-smtp.ts
 *   node --import tsx scripts/check-smtp.ts
 *   npm run check-smtp
 */

// ── 1. Helper to load environment variables from .env.local or .env ──────────────
function loadEnvFiles() {
  const rootDir = process.cwd();
  const envFiles = [".env.local", ".env"];

  for (const envFile of envFiles) {
    const filePath = path.join(rootDir, envFile);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      content.split("\n").forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) return;
        const eqIdx = trimmed.indexOf("=");
        if (eqIdx > 0) {
          const key = trimmed.slice(0, eqIdx).trim();
          let value = trimmed.slice(eqIdx + 1).trim();

          // Remove enclosing quotes if present
          if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
          ) {
            value = value.slice(1, -1);
          }

          if (!process.env[key]) {
            process.env[key] = value;
          }
        }
      });
    }
  }
}

// ── 2. Format console log output with colors ────────────────────────────────────
const log = {
  info: (msg: string) => console.log(`\x1b[36mℹ\x1b[0m  ${msg}`),
  success: (msg: string) => console.log(`\x1b[32m✓\x1b[0m  ${msg}`),
  warn: (msg: string) => console.log(`\x1b[33m⚠\x1b[0m  ${msg}`),
  error: (msg: string) => console.error(`\x1b[31m✗\x1b[0m  ${msg}`),
  heading: (msg: string) => console.log(`\n\x1b[1m\x1b[34m[SMTP Prebuild Check]\x1b[0m ${msg}`),
};

async function runSmtpCheck() {
  loadEnvFiles();

  log.heading("Validating SMTP Connection Configuration...");

  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const secureRaw = process.env.SMTP_SECURE;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipients = process.env.CONTACT_FORM_RECIPIENTS;

  // Mask password for display
  const maskedPass = pass ? `${pass.substring(0, 2)}${"*".repeat(Math.max(0, pass.length - 3))}${pass.slice(-1)}` : "(not set)";

  console.log(`  • Host       : ${host ?? "\x1b[31m(missing)\x1b[0m"}`);
  console.log(`  • Port       : ${portRaw ?? "\x1b[33m465 (default)\x1b[0m"}`);
  console.log(`  • Secure     : ${secureRaw ?? "\x1b[33mtrue (default)\x1b[0m"}`);
  console.log(`  • User       : ${user ?? "\x1b[31m(missing)\x1b[0m"}`);
  console.log(`  • Pass       : ${pass ? maskedPass : "\x1b[31m(missing)\x1b[0m"}`);
  console.log(`  • Recipients : ${recipients ?? "\x1b[33m(not set)\x1b[0m"}`);
  console.log("");

  // Validate presence of required env variables
  const missing: string[] = [];
  if (!host || host.includes("yourdomain.com")) missing.push("SMTP_HOST");
  if (!user || user.includes("yourdomain.com")) missing.push("SMTP_USER");
  if (!pass || pass.includes("your-email-password")) missing.push("SMTP_PASS");

  if (missing.length > 0) {
    log.error(`Missing or unconfigured SMTP environment variables: ${missing.join(", ")}`);
    log.warn("Please update your .env.local file with valid credentials.");
    process.exit(1);
  }

  const port = Number(portRaw ?? 465);
  const secure = secureRaw !== undefined ? secureRaw === "true" : port === 465;

  log.info(`Attempting connection to ${host}:${port} (SSL/TLS secure = ${secure})...`);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    connectionTimeout: 10000, // 10s connection timeout
    greetingTimeout: 5000,    // 5s greeting timeout
    socketTimeout: 10000,
  });

  try {
    // Verify SMTP connection and authentication
    await transporter.verify();
    log.success("SMTP connection and credentials verified successfully!");

    // Check optional send test flag
    const sendTest = process.argv.includes("--send") || process.env.SEND_TEST_EMAIL === "true";
    if (sendTest) {
      const targetRecipient = recipients || user;
      log.info(`Sending test email to ${targetRecipient}...`);

      const info = await transporter.sendMail({
        from: `"SMTP Test Script" <${user}>`,
        to: targetRecipient,
        subject: `[SMTP Test] Verification at ${new Date().toLocaleString()}`,
        text: `Hello!\n\nThis is an automated test email to confirm that your SMTP server configuration (${host}:${port}) is working correctly.\n\nSent at: ${new Date().toISOString()}`,
      });

      log.success(`Test email sent successfully! Message ID: ${info.messageId}`);
    }

    console.log("\x1b[32m✔ Prebuild SMTP check passed.\x1b[0m\n");
    process.exit(0);
  } catch (err: unknown) {
    const errorObj = err as Record<string, unknown>;
    log.error("Failed to establish SMTP connection or authenticate.");
    console.error(`\x1b[31mDetails:\x1b[0m ${errorObj?.message || String(err)}`);

    console.log("\n\x1b[33mTroubleshooting Tips:\x1b[0m");
    if (String(err).includes("EAUTH") || String(err).includes("535")) {
      console.log("  1. Authentication failed. Verify that SMTP_USER and SMTP_PASS are correct.");
      console.log("  2. If using Plesk/cPanel, ensure the email account exists and password isn't expired.");
    } else if (String(err).includes("ETIMEDOUT") || String(err).includes("ENOTFOUND")) {
      console.log("  1. Network timeout or invalid hostname. Verify SMTP_HOST is reachable.");
      console.log("  2. Ensure port " + port + " is not blocked by a firewall or ISP.");
    } else if (String(err).includes("wrong version number") || String(err).includes("TLSSocket")) {
      console.log("  1. SSL/TLS mismatch. Try setting SMTP_PORT=587 and SMTP_SECURE=false (for STARTTLS), or SMTP_PORT=465 and SMTP_SECURE=true (for SSL).");
    } else {
      console.log("  1. Verify port (465 for SSL, 587 for TLS) and SMTP_SECURE settings.");
      console.log("  2. Check server mail logs or firewall rules.");
    }
    console.log("");

    // Exit with failure code to halt build process
    process.exit(1);
  }
}

runSmtpCheck();
