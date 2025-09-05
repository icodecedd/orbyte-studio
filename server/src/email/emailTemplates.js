export const NEW_CONTACT_US = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact Us Submission</title>
</head>
<body style="font-family: 'Inter', sans-serif; background-color: #1C2526; margin: 0; padding: 20px; color: #E8ECEF;">
  <div style="max-width: 600px; margin: 30px auto; background: #2C3E50; border-radius: 12px; overflow: hidden; border: 1px solid #3A506B;">
    <div style="background: linear-gradient(90deg, #2C3E50, #1C2526); padding: 24px; text-align: center;">
      <h1 style="color: #E8ECEF; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: 0.5px;">New Contact Us Submission</h1>
    </div>
    <div style="padding: 32px;">
      <p style="font-size: 16px; line-height: 1.5; color: #E8ECEF;">Hello Admin,</p>
      <p style="font-size: 16px; line-height: 1.5; color: #E8ECEF;">A new contact form submission has been received in the system.</p>

      <div style="background-color: #3A506B; padding: 20px; border-radius: 8px; border-left: 4px solid #5C9EAD; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #E8ECEF; font-size: 20px; font-weight: 500;">Submission Details:</h3>
        <p style="margin: 10px 0; color: #E8ECEF;"><strong>Name:</strong> {firstName} {lastName}</p>
        <p style="margin: 10px 0; color: #E8ECEF;"><strong>Email:</strong> {email}</p>
        <p style="margin: 10px 0; color: #E8ECEF;"><strong>Role:</strong> {role}</p>
        <p style="margin: 10px 0; color: #E8ECEF;"><strong>Message:</strong> {message}</p>
        <p style="margin: 10px 0; color: #E8ECEF;"><strong>Link:</strong> <a href="{link}" style="color: #5C9EAD; text-decoration: underline;">{link}</a></p>
      </div>

      <p style="font-size: 16px; line-height: 1.5; color: #E8ECEF;">
        This is to notify you of a new application received via the Contact Us form. Review the submission details provided below.
      </p>

      <p style="font-size: 14px; color: #B0C4DE; line-height: 1.5;">Best regards,<br/>The Orbyte Studio Team</p>
    </div>
    <div style="background-color: #1C2526; padding: 16px; text-align: center; color: #B0C4DE; font-size: 12px; border-top: 1px solid #3A506B;">
      This is an automated message. Please do not reply.
    </div>
  </div>
</body>
</html>`;
