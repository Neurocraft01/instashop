import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { token, newPassword } = await req.json();

    if (!token || !newPassword) {
      return NextResponse.json({ error: "Missing token or password" }, { status: 400 });
    }

    const resetRecord = await db.passwordResetToken.findUnique({
      where: { token }
    });

    if (!resetRecord) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    if (resetRecord.expires < new Date()) {
      await db.passwordResetToken.delete({ where: { token } });
      return NextResponse.json({ error: "Token expired" }, { status: 400 });
    }

    // Set new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    await db.user.update({
      where: { email: resetRecord.email },
      data: { password: hashedPassword }
    });

    // Cleanup
    await db.passwordResetToken.deleteMany({
      where: { email: resetRecord.email }
    });

    return NextResponse.json({ success: true, message: "Password updated successfully." });
  } catch (error: any) {
    console.error("Reset password error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
