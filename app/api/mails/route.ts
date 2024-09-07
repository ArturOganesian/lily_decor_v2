import { connectDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import Email from "@/app/models/Email";

export async function GET() {
  try {
    await connectDB();

   const emails = await Email.find();

    return NextResponse.json({ success: true, data: emails }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Error fetching emails' }, { status: 500 });
  }
}