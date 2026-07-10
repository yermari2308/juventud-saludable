import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr]">
        <AnimatedSection className="relative z-10">
          <Badge>Movimiento nacional de bienestar joven</Badge>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.96] tracking-normal text-saludable-ink md:text-7xl">
            Una generación que convierte bienestar en futuro compartido.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Juventud Saludable impulsa salud integral, liderazgo juvenil, participación ciudadana e innovación social
            para que las personas jóvenes de Costa Rica tengan voz, herramientas y comunidad.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/unete">
                Unirme al movimiento <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/nosotros">
                <PlayCircle className="h-5 w-5" />
                Conocer el movimiento
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.12} className="relative min-h-[520px]">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-saludable-yellow/70 via-white to-saludable-purple/20" />
          <Image
            src="/images/foto-grupo.jpg"
            alt="Jóvenes del Movimiento Juventud Saludable reunidos en un encuentro comunitario"
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="rounded-[2rem] object-cover object-center"
          />
          <div className="glass absolute bottom-6 left-6 right-6 rounded-2xl p-5">
            <p className="text-sm font-semibold text-saludable-orange">Agenda país</p>
            <p className="mt-2 text-xl font-black">Bienestar, liderazgo y ciudadanía joven en cada provincia.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
