import type { Metadata } from "next";
import { JoinForm } from "@/components/forms/join-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Únete",
  description: "Formulario para unirse a Juventud Saludable como voluntario, líder, aliado o participante."
};

export default function JoinPage() {
  return (
    <div className="container-shell grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <SectionHeading
          eyebrow="Únete"
          title="Tu energía puede convertirse en acción organizada."
          description="Completa el formulario y cuéntanos qué temas te mueven. La experiencia está preparada para validaciones, CRM y panel administrativo futuro."
        />
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-soft">
          <p className="font-black">Puedes participar como:</p>
          <ul className="mt-4 grid gap-3 text-muted-foreground">
            <li>Voluntariado en actividades y campañas.</li>
            <li>Coordinación provincial o temática.</li>
            <li>Autoría para Opinión Juvenil.</li>
            <li>Alianza institucional o comunitaria.</li>
          </ul>
        </div>
      </div>
      <JoinForm />
    </div>
  );
}
