import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const getUserEmailTemplate = (userEmail: string) => {
  const logoUrl = `https://i.postimg.cc/VkBgD9DJ/Ambrosia-Logo-Black.png`;

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f8f8f8;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .header {
        background: #DDBA47;
        padding: 40px 20px;
        text-align: center;
      }
      .logo {
        height: 60px;
        margin-bottom: 20px;
      }
      .header-text {
        color: #ffffff;
        font-size: 28px;
        font-weight: 700;
        margin: 0;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .content {
        padding: 40px 30px;
      }
      .content-title {
        color: #DDBA47;
        font-size: 24px;
        font-weight: 700;
        margin: 0 0 20px 0;
      }
      .content-subtitle {
        color: #333333;
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 12px 0;
      }
      .content-text {
        color: #666666;
        font-size: 16px;
        line-height: 1.6;
        margin: 0 0 16px 0;
      }
      .benefits-list {
        background-color: #f9f0e6;
        border-left: 4px solid #DDBA47;
        padding: 20px;
        margin: 24px 0;
        border-radius: 4px;
      }
      .benefits-list li {
        color: #333333;
        font-size: 15px;
        line-height: 1.8;
        margin-bottom: 12px;
      }
      .benefits-list li:last-child {
        margin-bottom: 0;
      }
      .cta-button {
        display: inline-block;
        background: #DDBA47;
        color: #000000;
        padding: 14px 32px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        margin: 24px 0;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .divider {
        height: 2px;
        background: #DDBA47;
        margin: 24px 0;
        border: none;
      }
      .social-section {
        text-align: center;
        margin-top: 24px;
      }
      .social-link {
        display: inline-block;
        margin: 0 8px;
        text-decoration: none;
        color: #DDBA47;
        font-weight: 600;
      }
      .footer {
        background-color: #f8f8f8;
        padding: 20px 30px;
        text-align: center;
        border-top: 1px solid #eeeeee;
      }
      .footer-text {
        color: #999999;
        font-size: 13px;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="content">
        <h3 class="content-title">Welcome to Ambrosia! 🎉</h3>
        <p class="content-subtitle">We're thrilled to have you on board</p>
        <p class="content-text">
          Thank you for joining our waitlist! You're now part of an exclusive community of forward-thinking restaurant owners and managers.
        </p>
        <hr class="divider">
        <p class="content-subtitle">As a Founding Member, You'll Get:</p>
        <div class="benefits-list">
          <ul>
            <li><strong>🚀 Early Access:</strong> Be among the first to experience the Ambrosia platform and shape its future</li>
            <li><strong>💰 Special Pricing:</strong> Exclusive founding-member rates and limited-time launch offers</li>
            <li><strong>🎯 Direct Input:</strong> Your feedback will directly influence product development and features</li>
            <li><strong>👥 Community:</strong> Join a network of innovative restaurant professionals</li>
            <li><strong>📚 Resources:</strong> Access exclusive content and best practices from industry experts</li>
          </ul>
        </div>
        <p class="content-text">
          We're building something special at Ambrosia, and we're excited to have you as part of this journey. Our team is working hard to bring you a platform that truly understands the unique challenges of modern restaurants.
        </p>
        <a href="https://ambrosiahq.com" class="cta-button">Visit Our Website</a>
        <p class="content-text" style="font-size: 14px; margin-top: 32px; color: #999999;">
          Stay tuned for updates! We'll be reaching out soon with more details about the platform, exclusive previews, and special opportunities for our founding members.
        </p>
      </div>
      <div class="footer">
        <p class="footer-text">
          You're receiving this email because you joined the Ambrosia waitlist. If you'd like to update your preferences, please contact us at ambrosiaerp@gmail.com
        </p>
      </div>
    </div>
  </body>
</html>
`;
};

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Send welcome email to user
    const welcomeResult = await resend.emails.send({
      from: "Ambrosia HQ <no-reply@ambrosiahq.com>",
      to: email,
      subject: "Welcome to Ambrosia - You're In! 🎉",
      html: getUserEmailTemplate(email),
    });

    if (welcomeResult.error) {
      console.error("Error sending welcome email:", welcomeResult.error);
      return NextResponse.json(
        { error: "Failed to send welcome email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Successfully joined waitlist" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
