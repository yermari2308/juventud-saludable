import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { navItems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-saludable-ink text-white">
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <p className="text-2xl font-black">Juventud Saludable</p>
          <p className="mt-4 max-w-md text-white/70">
            Movimiento costarricense que organiza talento joven para convertir bienestar, liderazgo e innovación social
            en impacto nacional.
          </p>
          <div className="mt-6 flex gap-3">
            <Link className="grid h-10 w-10 place-items-center rounded-lg bg-white/10" href="mailto:hola@juventudsaludable.cr" aria-label="Correo">
              <Mail className="h-4 w-4" />
            </Link>
            <Link className="grid h-10 w-10 place-items-center rounded-lg bg-white/10" href="https://www.instagram.com/" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link className="grid h-10 w-10 place-items-center rounded-lg bg-white/10" href="https://www.linkedin.com/" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Sitio</p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} className="text-sm text-white/70 hover:text-white" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Costa Rica</p>
          <p className="mt-4 flex gap-2 text-sm text-white/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saludable-yellow" />
            Presencia nacional con coordinaciones provinciales en crecimiento.
          </p>
          <p className="mt-8 text-xs text-white/50">© 2026 Juventud Saludable. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
