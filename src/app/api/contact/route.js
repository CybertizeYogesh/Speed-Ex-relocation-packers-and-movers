import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fname, lname, email, phone, message } = body;

    // Validate inputs
    if (!fname || !lname || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Log the lead details (in production, you can send an email or store in a DB)
    console.log("New Lead Received:", { fname, lname, email, phone, message });

    // Success response
    return NextResponse.json({ success: true, message: "Lead submitted successfully" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
