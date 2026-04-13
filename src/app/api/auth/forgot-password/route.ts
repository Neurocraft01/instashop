import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { randomBytes } from "crypto";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await db.user.findUnique({ where: { email } });
    
    // Always return success to prevent email enumeration attacks
    if (!user) {
      return NextResponse.json({ success: true, message: "If an account exists, a reset link was sent." });
    }

    // Generate token
    const token = randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 3600 * 1000); // 1 hour

    // Save token
    await db.passwordResetToken.create({
      data: { email, token, expires }
    });

    // Send Email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;

    await transporter.sendMail({
      from: `"InstaShop Security" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Password Reset Request - InstaShop",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
          <h2>Reset Your Password</h2>
          <p>You requested a password reset for your InstaShop account. Click the link below to set a new password.</p>
          <a href="${resetLink}" style="display: inline-block; padding: 12px 24px; background: #F9CC61; color: #422006; text-decoration: none; border-radius: 8px; font-weight: bold;">Reset Password</a>
          <p style="margin-top: 24px; color: #666; font-size: 14px;">This link will expire in 1 hour. If you didn't request this, you can safely ignore this email.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "If an account exists, a reset link was sent." });
  } catch (error: any) {
    console.error("Forgot password error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
