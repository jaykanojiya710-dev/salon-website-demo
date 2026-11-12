import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().trim().max(200),
  phone: z.string().trim().min(10).max(40),
  service: z.string().trim().min(2).max(120),
  preferredDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  preferredTime: z.string().trim().min(3).max(20),
  notes: z.string().trim().max(1000).optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Some fields need attention. Check the form and try again." },
        { status: 400 }
      );
    }
    const d = parsed.data;
    const day = new Date(`${d.preferredDate}T12:00:00`).getDay();
    if (day === 0 || day === 1) {
      return NextResponse.json(
        {
          ok: false,
          error: "The studio is closed on Sundays and Mondays. Pick a day from Tuesday to Saturday.",
        },
        { status: 400 }
      );
    }
    const saved = await db.bookingRequest.create({
      data: {
        name: d.name,
        email: d.email,
        phone: d.phone,
        service: d.service,
        preferredDate: d.preferredDate,
        preferredTime: d.preferredTime,
        notes: d.notes ?? null,
      },
    });
    return NextResponse.json({ ok: true, id: saved.id });
  } catch (err) {
    console.error("booking request failed", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Sending failed. The studio did not receive your request. Try again, or call (512) 555-0138.",
      },
      { status: 500 }
    );
  }
}
