import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getEvents, saveEvents, type SiteEvent } from "@/lib/events-store";
import { isValidSessionToken, SESSION_COOKIE } from "@/lib/auth";

async function isAuthed() {
  const cookieStore = await cookies();
  return isValidSessionToken(cookieStore.get(SESSION_COOKIE)?.value);
}

export async function GET() {
  const events = await getEvents();
  return NextResponse.json({ events });
}

export async function PUT(request: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!Array.isArray(body?.events)) {
    return NextResponse.json({ error: "Formato inválido" }, { status: 400 });
  }

  const events: SiteEvent[] = body.events
    .map((event: Partial<SiteEvent>) => ({
      title: String(event.title ?? "").trim(),
      date: String(event.date ?? "").trim(),
      place: String(event.place ?? "").trim(),
      type: String(event.type ?? "").trim(),
      summary: String(event.summary ?? "").trim()
    }))
    .filter((event: SiteEvent) => event.title && event.date);

  await saveEvents(events);
  return NextResponse.json({ events });
}
