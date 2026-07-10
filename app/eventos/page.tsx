import type { Metadata } from "next";
import { CalendarDays, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { getEvents } from "@/lib/events-store";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Calendario, eventos futuros, registro, lugar, fecha y galerías de Juventud Saludable."
};

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const events = await getEvents();
  return (
    <div className="container-shell py-16">
      <SectionHeading eyebrow="Eventos" title="Encuentros diseñados para activar comunidad." description="Calendario de foros, talleres, activaciones y laboratorios con registro preparado para integrarse a una base de datos." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-2xl bg-saludable-ink p-6 text-white">
          <CalendarDays className="h-8 w-8 text-saludable-yellow" />
          <h2 className="mt-5 text-3xl font-black">Calendario 2026</h2>
          <p className="mt-4 leading-7 text-white/72">Los eventos se publican con lugar, fecha, tipo de actividad, cupos y galería posterior.</p>
          <div className="mt-6 grid grid-cols-7 gap-2 text-center text-xs">
            {Array.from({ length: 35 }, (_, index) => (
              <span key={index} className={`rounded-lg py-2 ${[5, 14, 24].includes(index) ? "bg-saludable-yellow text-saludable-ink font-black" : "bg-white/10"}`}>
                {index + 1}
              </span>
            ))}
          </div>
        </aside>
        <div className="grid gap-4">
          {events.map((event) => (
            <article key={event.title} className="rounded-2xl border bg-white p-6 shadow-soft">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-saludable-orange">{event.type}</p>
              <h2 className="mt-3 text-3xl font-black">{event.title}</h2>
              <p className="mt-4 flex gap-2 text-sm font-semibold text-muted-foreground">
                <CalendarDays className="h-4 w-4" /> {formatDate(event.date)}
              </p>
              <p className="mt-2 flex gap-2 text-sm font-semibold text-muted-foreground">
                <MapPin className="h-4 w-4" /> {event.place}
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">{event.summary}</p>
              <Button className="mt-5" variant="outline">Registrarme</Button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
