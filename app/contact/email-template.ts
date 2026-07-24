interface EnquiryData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export function buildEnquiryEmail(data: EnquiryData): string {
  const { name, email, subject, message, timestamp } = data;

  const formattedDate = new Date(timestamp).toLocaleString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Dubai",
    timeZoneName: "short",
  });

  const escapedMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br/>");

  return `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>New Contact Enquiry — Prime Terra Global Ventures</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f4f2;font-family:'IBM Plex Sans',Arial,sans-serif;color:#333333;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f0f4f2;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;">

          <!-- HEADER -->
          <tr>
            <td style="background-color:#1C5244;border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;">
              <!-- Logo / Brand Name -->
              <div style="display:inline-block;margin-bottom:12px;">
                <span style="display:inline-block;width:10px;height:10px;background-color:#F8AB1D;border-radius:50%;margin-right:6px;vertical-align:middle;"></span>
                <span style="font-family:Montserrat,Georgia,serif;font-size:18px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;vertical-align:middle;text-transform:uppercase;">Prime Terra Global Ventures</span>
              </div>
              <p style="margin:0;font-family:Montserrat,Georgia,serif;font-size:11px;font-weight:700;color:#F8AB1D;letter-spacing:2.5px;text-transform:uppercase;">FZCO — Dubai Silicon Oasis</p>
            </td>
          </tr>

          <!-- AMBER ACCENT BAR -->
          <tr>
            <td style="background-color:#F8AB1D;height:4px;line-height:4px;font-size:4px;">&nbsp;</td>
          </tr>

          <!-- BODY CARD -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 32px 40px;border-radius:0 0 0 0;">

              <!-- Title -->
              <h1 style="margin:0 0 6px 0;font-family:Montserrat,Georgia,serif;font-size:22px;font-weight:800;color:#1C5244;letter-spacing:-0.5px;line-height:1.2;">New Website Enquiry</h1>
              <p style="margin:0 0 28px 0;font-size:14px;color:#777777;">Received on ${formattedDate}</p>

              <!-- Divider -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:28px;">
                <tr><td style="border-top:1px solid #e8ede9;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>

              <!-- Sender details -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:28px;border-radius:10px;overflow:hidden;border:1px solid #e8ede9;">
                <tr>
                  <td style="background-color:#f7faf8;padding:12px 20px;border-bottom:1px solid #e8ede9;">
                    <p style="margin:0;font-size:11px;font-weight:700;color:#1C5244;letter-spacing:2px;text-transform:uppercase;">Sender Details</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding-bottom:14px;width:40%;">
                          <p style="margin:0;font-size:11px;color:#999999;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Full Name</p>
                          <p style="margin:4px 0 0 0;font-size:15px;color:#1C5244;font-weight:500;">${name}</p>
                        </td>
                        <td style="padding-bottom:14px;">
                          <p style="margin:0;font-size:11px;color:#999999;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Email Address</p>
                          <p style="margin:4px 0 0 0;font-size:15px;">
                            <a href="mailto:${email}" style="color:#1C5244;text-decoration:none;font-weight:500;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <p style="margin:0;font-size:11px;color:#999999;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Subject</p>
                          <p style="margin:4px 0 0 0;font-size:15px;color:#333333;font-weight:500;">${subject}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;color:#1C5244;letter-spacing:2px;text-transform:uppercase;">Message</p>
              <div style="background-color:#f7faf8;border-left:4px solid #F8AB1D;border-radius:0 10px 10px 0;padding:20px 24px;margin-bottom:32px;">
                <p style="margin:0;font-size:15px;line-height:1.75;color:#333333;">${escapedMessage}</p>
              </div>

              <!-- Reply CTA -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:8px;">
                <tr>
                  <td style="border-radius:8px;background-color:#1C5244;">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;padding:14px 28px;font-family:Montserrat,Georgia,serif;font-size:13px;font-weight:800;color:#ffffff;text-decoration:none;letter-spacing:0.5px;text-transform:uppercase;">
                      Reply to ${name.split(" ")[0]} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- AMBER ACCENT BAR BOTTOM -->
          <tr>
            <td style="background-color:#F8AB1D;height:4px;line-height:4px;font-size:4px;">&nbsp;</td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#1a1a1a;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px 0;font-family:Montserrat,Georgia,serif;font-size:12px;font-weight:800;color:#ffffff;letter-spacing:1px;text-transform:uppercase;">Prime Terra Global Ventures FZCO</p>
              <p style="margin:0 0 4px 0;font-size:12px;color:#888888;line-height:1.5;">Dubai Silicon Oasis, DIEZA, Dubai, United Arab Emirates</p>
              <p style="margin:0;font-size:11px;color:#555555;">This is an automated notification generated from your website's contact form.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
