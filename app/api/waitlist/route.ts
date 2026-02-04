import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send notification email to Ambrosia
    const notificationResult = await resend.emails.send({
      from: 'noreply@ambrosiahq.com',
      to: 'ambrosiahq@gmail.com',
      subject: 'New Waitlist Signup',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Waitlist Signup</h2>
          <p style="color: #666; font-size: 16px;">
            Someone just joined your waitlist!
          </p>
          <p style="color: #333; font-size: 18px; font-weight: bold;">
            ${email}
          </p>
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            Keep growing your waitlist!
          </p>
        </div>
      `,
    })

    if (notificationResult.error) {
      console.error('Error sending notification email:', notificationResult.error)
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      )
    }

    // Send welcome email to user
    const welcomeResult = await resend.emails.send({
      from: 'noreply@ambrosiahq.com',
      to: email,
      subject: 'Welcome to Ambrosia Waitlist!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Welcome to Ambrosia!</h2>
          <p style="color: #666; font-size: 16px;">
            Thank you for joining our waitlist! We're excited to have you on this journey.
          </p>
          <p style="color: #666; font-size: 16px;">
            As a founding member, you'll get:
          </p>
          <ul style="color: #666; font-size: 16px; line-height: 1.8;">
            <li>Early access to Ambrosia</li>
            <li>Exclusive founding-member offers</li>
            <li>Direct input on product development</li>
          </ul>
          <p style="color: #666; font-size: 16px; margin-top: 20px;">
            We'll be in touch soon with more details!
          </p>
          <p style="color: #999; font-size: 14px; margin-top: 30px;">
            Best regards,<br/>
            The Ambrosia Team
          </p>
        </div>
      `,
    })

    if (welcomeResult.error) {
      console.error('Error sending welcome email:', welcomeResult.error)
      return NextResponse.json(
        { error: 'Failed to send welcome email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Successfully joined waitlist' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
