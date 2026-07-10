import { list, put } from "@vercel/blob";
import { events as seedEvents } from "@/lib/site";

export type SiteEvent = {
  title: string;
  date: string;
  place: string;
  type: string;
  summary: string;
};

const EVENTS_PATHNAME = "data/events.json";

export async function getEvents(): Promise<SiteEvent[]> {
  try {
    const { blobs } = await list({ prefix: EVENTS_PATHNAME, limit: 1 });
    const match = blobs.find((blob) => blob.pathname === EVENTS_PATHNAME);
    if (!match) return seedEvents;

    const response = await fetch(match.url, { cache: "no-store" });
    if (!response.ok) return seedEvents;

    const data = await response.json();
    return Array.isArray(data) ? data : seedEvents;
  } catch {
    return seedEvents;
  }
}

export async function saveEvents(events: SiteEvent[]): Promise<void> {
  await put(EVENTS_PATHNAME, JSON.stringify(events, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true
  });
}
