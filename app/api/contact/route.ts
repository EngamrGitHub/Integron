import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Integrate your email provider (Resend / Nodemailer / SendGrid)
    // For now, we just log it to the server console.
    console.log("New Contact Message:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
