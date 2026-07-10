import Link from "next/link";
import { ArrowRight, CalendarDays, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContentCard } from "@/components/content-card";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { allies, events, focusAreas } from "@/lib/site";
import { blogPosts, opinionPosts } from "@/content/registry";
import { formatDate } from "@/lib/utils";

export default function Home() {
  const featured = [...blogPosts, ...opinionPosts].slice(0, 3);

  return (
    <>
      <Hero />

      <AnimatedSection className="container-shell py-16">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Un ecosistema joven para cuidar, aprender, liderar y transformar."
          description="Trabajamos en áreas conectadas entre sí porque el bienestar integral necesita comunidad, oportunidades, conocimiento y participación pública."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <div key={area.title} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className={`grid h-11 w-11 place-items-center rounded-xl ${area.tone}`}>
                <area.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-black">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white/64 py-16">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Agenda viva" title="Próximos eventos y espacios de encuentro." />
            <Button asChild variant="outline">
              <Link href="/eventos">Ver calendario</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {events.map((event) => (
              <article key={event.title} className="rounded-2xl border bg-white p-6 shadow-soft">
                <div className="flex items-center gap-2 text-sm font-semibold text-saludable-orange">
                  <CalendarDays className="h-4 w-4" />
                  {formatDate(event.date)}
                </div>
                <h3 className="mt-4 text-2xl font-black leading-tight">{event.title}</h3>
                <p className="mt-3 text-sm font-semibold text-saludable-purple">{event.place}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{event.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Editorial" title="Ideas, noticias y opinión joven." />
          <Button asChild variant="outline">
            <Link href="/blog">
              Explorar artículos <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featured.map((post) => (
            <ContentCard
              key={post.slug}
              href={blogPosts.includes(post as (typeof blogPosts)[number]) ? `/blog/${post.slug}` : `/opinion-juvenil/${post.slug}`}
              title={post.metadata.title}
              description={post.metadata.description}
              image={post.metadata.image}
              meta={post.metadata.category}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-16">
        <div className="grid gap-8 rounded-[2rem] bg-saludable-ink p-8 text-white md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Quote className="h-10 w-10 text-saludable-yellow" />
            <p className="mt-6 text-2xl font-black leading-tight md:text-4xl">
              “La juventud no es el futuro esperando turno: es liderazgo presente con capacidad de cuidar y proponer.”
            </p>
          </div>
          <div className="grid content-between gap-8">
            <p className="text-lg leading-8 text-white/72">
              Diseñamos espacios donde una persona joven puede llegar con una inquietud y salir con una comunidad,
              una ruta de acción y una forma concreta de incidir.
            </p>
            <div className="flex flex-wrap gap-3">
              {allies.map((ally) => (
                <span key={ally} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
                  {ally}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-16">
        <div className="rounded-[2rem] bg-gradient-to-r from-saludable-orange via-saludable-purple to-saludable-ink p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Convocatoria abierta</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Súmate a una red joven que está construyendo bienestar con seriedad y esperanza.
          </h2>
          <Button asChild size="lg" className="mt-8 bg-white text-saludable-ink hover:bg-white/90">
            <Link href="/unete">Quiero participar</Link>
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
}
