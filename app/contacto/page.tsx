import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto, correo, redes sociales, mapa y preguntas frecuentes de Juventud Saludable."
};

const faqs = [
  ["¿Puedo participar si no pertenezco a una organización?", "Sí. El movimiento está abierto a jóvenes, voluntarios, estudiantes, profesionales y aliados comunitarios."],
  ["¿Tienen presencia fuera de San José?", "Sí. La estructura contempla coordinaciones y actividades en las siete provincias."],
  ["¿Cómo se gestionan alianzas?", "A través de una conversación inicial, definición de objetivos compartidos y una ruta de colaboración medible."]
];

export default function ContactPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading eyebrow="Contacto" title="Hablemos de bienestar joven con intención de acción." description="Escríbenos para alianzas, prensa, voluntariado, charlas, eventos o coordinación comunitaria." />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {[
            [Mail, "hola@juventudsaludable.cr", "Correo institucional"],
            [MessageCircle, "@juventudsaludable", "Redes sociales"],
            [MapPin, "Costa Rica", "Presencia nacional"]
          ].map(([Icon, title, subtitle]) => (
            <div key={String(title)} className="flex gap-4 rounded-2xl border bg-white p-5 shadow-sm">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-orange-100 text-saludable-orange">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-black">{String(title)}</p>
                <p className="text-sm text-muted-foreground">{String(subtitle)}</p>
              </div>
            </div>
          ))}
          <div className="rounded-2xl border bg-white p-6 shadow-soft">
            <p className="font-black">Preguntas frecuentes</p>
            <div className="mt-4 grid gap-4">
              {faqs.map(([question, answer]) => (
                <div key={question} className="border-t pt-4">
                  <p className="font-semibold">{question}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
