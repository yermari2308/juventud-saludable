import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { focusAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Qué hacemos",
  description: "Áreas de trabajo de Juventud Saludable: salud, educación, liderazgo, participación, ambiente, tecnología, voluntariado y emprendimiento."
};

export default function WorkPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Qué hacemos"
        title="Programas diseñados como rutas de impacto, no como actividades sueltas."
        description="Cada área combina formación, acción comunitaria, alianzas y comunicación pública para generar cambios sostenibles."
      />
      <div className="mt-12 grid gap-6">
        {focusAreas.map((area, index) => (
          <AnimatedSection key={area.title} className="grid gap-6 rounded-2xl border bg-white p-6 shadow-soft lg:grid-cols-[0.45fr_1fr]">
            <div>
              <div className={`grid h-12 w-12 place-items-center rounded-xl ${area.tone}`}>
                <area.icon className="h-5 w-5" />
              </div>
              <p className="mt-6 text-sm font-black text-saludable-orange">Área {String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-3xl font-black">{area.title}</h2>
            </div>
            <div className="grid content-center gap-4">
              <p className="text-lg leading-8 text-muted-foreground">{area.description}</p>
              <div className="grid gap-3 md:grid-cols-3">
                {["Diagnóstico", "Acción", "Medición"].map((step) => (
                  <span key={step} className="rounded-xl bg-muted p-4 text-sm font-bold">{step}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
