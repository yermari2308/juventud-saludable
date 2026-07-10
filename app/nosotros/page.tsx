import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { timeline } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Historia, misión, visión, valores y presencia nacional de Juventud Saludable."
};

const values = ["Cuidado", "Participación", "Evidencia", "Inclusión", "Corresponsabilidad", "Esperanza práctica"];

export default function AboutPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Nosotros"
        title="Una organización joven con ambición institucional."
        description="Nacimos para que el bienestar integral de las juventudes sea una prioridad pública, comunitaria y cultural en Costa Rica."
      />
      <AnimatedSection className="mt-12 grid gap-5 lg:grid-cols-3">
        {[
          ["Misión", "Impulsar capacidades, redes y proyectos que mejoren el bienestar integral de las personas jóvenes."],
          ["Visión", "Una Costa Rica donde cada joven pueda vivir con salud, propósito, voz pública y oportunidades reales."],
          ["Liderazgo", "Coordinaciones provinciales conectadas por una agenda común, medición de impacto y aprendizaje continuo."]
        ].map(([title, text]) => (
          <article key={title} className="rounded-2xl border bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black">{title}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{text}</p>
          </article>
        ))}
      </AnimatedSection>

      <AnimatedSection className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SectionHeading eyebrow="Valores" title="Principios que orientan cada decisión." />
          <div className="mt-7 flex flex-wrap gap-3">
            {values.map((value) => (
              <span key={value} className="rounded-full border bg-white px-4 py-2 text-sm font-semibold">{value}</span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black">Cronología</h2>
          <div className="mt-6 grid gap-5">
            {timeline.map(([year, text]) => (
              <div key={year} className="grid grid-cols-[5rem_1fr] gap-4">
                <div className="font-black text-saludable-orange">{year}</div>
                <p className="border-l pl-5 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-16 rounded-[2rem] bg-white p-8 shadow-soft">
        <SectionHeading eyebrow="Presencia nacional" title="Siete provincias, una agenda común." />
        <div className="mt-8 grid gap-3 md:grid-cols-7">
          {["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"].map((province) => (
            <div key={province} className="rounded-xl bg-muted p-4 text-center text-sm font-bold">{province}</div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
