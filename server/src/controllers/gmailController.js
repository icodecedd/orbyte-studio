import { mailTransporter } from "../email/emailConfig.js";
import { NEW_CONTACT_US, NEW_FEEDBACK } from "../email/emailTemplates.js";

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
    res.status(200).json({ message: "New Application sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

export const sendFeedbackEmail = async (req, res) => {
  console.log(req.body);
  const { rating, name, email, message } = req.body;
  let ratingNumber = 0;

  if (rating === "Excellent") {
    ratingNumber = 5;
  } else if (rating === "Good") {
    ratingNumber = 4;
  } else if (rating === "Average") {
    ratingNumber = 3;
  } else if (rating === "Bad") {
    ratingNumber = 2;
  } else if (rating === "Terrible") {
    ratingNumber = 1;
  }

  try {
    const mailOptions = {
      from: `Orbyte Studio <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "Orbyte Feedback Received",
      html: NEW_FEEDBACK.replace("{name}", name)
        .replace("{email}", email)
        .replace("{message}", message)
        .replace("{rating}", ratingNumber),
    };

    await mailTransporter.sendMail(mailOptions);
    res.status(200).json({ message: "Feeback sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
