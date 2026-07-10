import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galería",
  description: "Fotos, videos y filtros de actividades de Juventud Saludable."
};

export default function GalleryPage() {
  const filters = ["Todo", "Salud mental", "Voluntariado", "Innovación", "Vida saludable"];

  return (
    <div className="container-shell py-16">
      <SectionHeading eyebrow="Galería" title="Memoria visual de una comunidad en movimiento." description="Fotos y videos con carga optimizada, categorías y estructura preparada para galerías dinámicas." />
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button key={filter} className="rounded-full border bg-white px-4 py-2 text-sm font-semibold hover:bg-muted">{filter}</button>
        ))}
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {gallery.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-2xl border bg-white shadow-soft">
            <div className="relative aspect-[16/10]">
              <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <p className="text-sm font-bold text-saludable-orange">{item.category}</p>
              <h2 className="mt-2 text-2xl font-black">{item.title}</h2>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
