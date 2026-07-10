import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { news } from "@/lib/site";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Comunicados, boletines, eventos y pronunciamientos de Juventud Saludable."
};

export default function NewsPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading eyebrow="Noticias" title="Información institucional clara y oportuna." description="Comunicados, pronunciamientos, boletines y actividades organizados para prensa, aliados y comunidad." />
      <div className="mt-10 grid gap-5">
        {news.map((item) => (
          <article key={item.title} className="grid gap-5 rounded-2xl border bg-white p-6 shadow-soft md:grid-cols-[3rem_1fr_auto] md:items-center">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-100 text-saludable-orange">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-saludable-purple">{item.category} · {formatDate(item.date)}</p>
              <h2 className="mt-1 text-2xl font-black">{item.title}</h2>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
            <span className="rounded-full bg-muted px-4 py-2 text-sm font-semibold">Leer</span>
          </article>
        ))}
      </div>
    </div>
  );
}
