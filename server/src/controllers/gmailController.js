import { mailTransporter } from "../email/emailConfig.js";
import { NEW_CONTACT_US } from "../email/emailTemplates.js";

export const sendApplicationEmail = async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, message, role, link } = req.body;

  try {
    const mailOptions = {
      from: `Orbyte Studio <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "New Application Received",
      html: NEW_CONTACT_US.replace("{firstName}", firstName)
        .replace("{lastName}", lastName)
        .replace("{email}", email)
        .replace("{message}", message)
        .replace("{role}", role)
        .replaceAll("{link}", link),
    };

    await mailTransporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
