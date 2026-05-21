import { Resend } from "resend";
import { ContactFormData } from "../types/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const buildEmailToSentinel = (data: ContactFormData): string => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f3; margin: 0; padding: 20px; }
    .card { max-width: 600px; margin: auto; background: #ffffff; border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(90deg, #040B74, #18234A); padding: 32px; text-align: center; }
    .header h1 { color: #F5F5DC; font-size: 22px; margin: 0; }
    .header p  { color: #A37637; font-size: 14px; margin: 6px 0 0; }
    .body { padding: 32px; }
    .field { margin-bottom: 20px; }
    .field label { display: block; font-weight: 600; color: #040B74; font-size: 13px; text-transform: uppercase; margin-bottom: 6px; }
    .field p { background: #f5f5f3; border-radius: 8px; padding: 12px 16px; margin: 0; color: #000; font-size: 15px; white-space: pre-wrap; }
    .footer { text-align: center; padding: 20px; background: #18234A; color: #F5F5DCB0; font-size: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>📩 New Contact Form Message</h1>
      <p>Sentinel GRC Advisory Website</p>
    </div>
    <div class="body">
      <div class="field"><label>Name</label><p>${data.name}</p></div>
      <div class="field"><label>Email</label><p>${data.email}</p></div>
      <div class="field"><label>Phone</label><p>${data.phone || "Not provided"}</p></div>
      <div class="field"><label>Subject</label><p>${data.subject}</p></div>
      <div class="field"><label>Message</label><p>${data.message}</p></div>
    </div>
    <div class="footer">© ${new Date().getFullYear()} Sentinel GRC Advisory. All rights reserved.</div>
  </div>
</body>
</html>
`;

const buildAutoReply = (name: string): string => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f3; margin: 0; padding: 20px; }
    .card { max-width: 600px; margin: auto; background: #ffffff; border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(90deg, #040B74, #18234A); padding: 40px 32px; text-align: center; }
    .header h1 { color: #F5F5DC; font-size: 24px; margin: 0 0 8px; }
    .header p  { color: #F39B1F; font-size: 14px; margin: 0; }
    .body { padding: 32px; color: #000; font-size: 15px; line-height: 1.7; }
    .highlight { background: #040B7408; border-left: 4px solid #F39B1F; padding: 12px 16px; border-radius: 0 8px 8px 0; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; background: #18234A; color: #F5F5DCB0; font-size: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Thank You, ${name}!</h1>
      <p>Sentinel GRC Advisory</p>
    </div>
    <div class="body">
      <p>We've received your message and will get back to you within <strong>24 hours</strong>.</p>
      <div class="highlight">
        <strong>Need to reach us sooner?</strong><br/>
        📞 (+234) 8163 527 692 or (+233) 554 678 223<br/>
        ✉️ sentinel.grcadvisory@gmail.com
      </div>
      <p><strong>Business Hours:</strong><br/>
      Monday – Friday: 9:00 AM – 6:00 PM<br/>
      Saturday: 10:00 AM – 4:00 PM</p>
    </div>
    <div class="footer">© ${new Date().getFullYear()} Sentinel GRC Advisory. All rights reserved.</div>
  </div>
</body>
</html>
`;

export const sendContactEmail = async (
  data: ContactFormData,
): Promise<void> => {
  // 1. Notify Sentinel
  await resend.emails.send({
    from: "Sentinel Website <onboarding@resend.dev>",
    to: process.env.EMAIL_TO!,
    replyTo: data.email,
    subject: `[Website Enquiry] ${data.subject} — from ${data.name}`,
    html: buildEmailToSentinel(data),
  });

  // 2. Auto-reply to sender
  await resend.emails.send({
    from: "Sentinel GRC Advisory <onboarding@resend.dev>",
    to: data.email,
    subject: "We received your message — Sentinel GRC Advisory",
    html: buildAutoReply(data.name),
  });
};
